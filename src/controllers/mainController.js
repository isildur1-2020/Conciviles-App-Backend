import { axiosInstance } from "../axios/instance";
import { groups, boards, outputColumns } from "../mondayConfig";
import { assitanceStringify } from "../adapters/main";
import { createItemService } from "../services/createItemService";
import { update } from "../querys/output";
import { findItemMonday } from "../monday/findItemMonday";
import { currentDate, objectTime } from "../utilities/moment/timezone";

const createItem = async (req, res) => {
  try {
    const { body } = req;
    const { Example2 } = await boards();
    const { err, itemsFound, message } = await findItemMonday({
      board_id: Example2,
      column_id: outputColumns.fecha,
      column_values: [currentDate()],
    });
    if (err)
      return res.status(200).json({
        err: true,
        isCreated: false,
        message,
      });
    const isItemFound = itemsFound?.find(({ name }) => name === body?.id);
    if (isItemFound)
      return res.status(200).json({
        err: true,
        isCreated: false,
        message: "Ya se ha guardado el registro de este usuario.",
      });
    const resp = await createItemService({
      boardId: Example2,
      groupId: groups.Archivo,
      itemName: body?.id,
      columnValues: assitanceStringify(body),
    });
    console.log(resp.data);
    const isCreated = resp?.data?.data?.create_item?.id;
    if (!isCreated)
      return res.status(200).json({
        err: true,
        isCreated: false,
        message: "Error al guardar el registro",
      });
    res.status(200).json({
      err: false,
      isCreated,
      message: "Registro guardado con éxito",
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      isCreated: false,
      message: err,
    });
  }
};

const updateDate = async (req, res) => {
  try {
    const { body } = req;
    const { output, supervisor } = body;
    const { Example2 } = await boards();
    const variables = {
      board_id: Example2,
      column_id: outputColumns.fecha,
      column_values: [currentDate()],
    };
    const resp = await findItemMonday(variables);
    const { err, itemsFound, message } = resp;
    if (err)
      return res.status(200).json({
        err: true,
        isUpdated: false,
        message,
      });
    let itemId = itemsFound.find(({ name }) => name === body?.id);
    if (!itemId)
      return res.status(200).json({
        icon: "info",
        err: true,
        isUpdated: false,
        message:
          "No se ha encontrado un registro para actualizar, espera un momento e intenta de nuevo.",
      });
    // VARIABLES TO CHANGE DATE
    const variables2 = {
      board_id: Example2,
      item_id: Number(itemId?.id),
      column_id: outputColumns.hora_salida,
      value: JSON.stringify(objectTime(output)),
    };
    // VARIABLES TO CHANGE SUPERVISOR
    const variables3 = {
      board_id: Example2,
      item_id: Number(itemId?.id),
      column_id: "dup__of_supervisor_inspector_ingreso",
      value: JSON.stringify(supervisor),
    };
    await axiosInstance({
      url: "/",
      method: "POST",
      data: {
        variables: variables3,
        query: update,
      },
    });
    const resp2 = await axiosInstance({
      url: "/",
      method: "POST",
      data: {
        variables: variables2,
        query: update,
      },
    });
    const isUpdated = resp2?.data?.data?.change_column_value?.id;
    if (!isUpdated)
      return res.status(200).json({
        err: true,
        isUpdated: false,
        message:
          "No se pudo actualizar el registro, espera un momento e intenta de nuevo por favor.",
      });
    res.status(200).json({
      err: false,
      isUpdated,
      message: "Registro actualizado con éxito.",
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      isUpdated: false,
      message: err,
    });
  }
};

export const mainController = async (req, res) => {
  const { updateItem } = req.body;
  !updateItem ? createItem(req, res) : updateDate(req, res);
};
