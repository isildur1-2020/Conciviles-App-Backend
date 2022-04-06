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
    const { err, itemsFound, message } = await findItemMonday({
      board_id: boards.Example2,
      column_id: outputColumns.fecha,
      column_values: [currentDate],
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
      boardId: boards.Example2,
      groupId: groups.Archivo,
      itemName: body?.id,
      columnValues: assitanceStringify(body),
    });
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
    const { output } = body;
    const variables = {
      board_id: boards.Example2,
      column_id: outputColumns.fecha,
      column_values: [currentDate],
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
    const variables2 = {
      board_id: boards.Example2,
      item_id: Number(itemId?.id),
      column_id: outputColumns.hora_salida,
      value: JSON.stringify(objectTime(output)),
    };
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
