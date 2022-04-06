import { findItemService } from "../services/findItemService";

export const findItemMonday = async (variables) => {
  // const variables = {
  //     board_id,
  //     column_id,
  //     column_values,
  //   };
  try {
    const resp = await findItemService(variables);
    const itemsFound = resp?.data?.data?.items_by_multiple_column_values;
    if (!itemsFound)
      return {
        err: true,
        itemsFound: false,
        message: "No se ha podido procesar la solicitud, intenta de nuevo.",
      };
    else
      return {
        err: false,
        itemsFound,
        message: "Registro encontrado con éxito",
      };
  } catch (err) {
    throw new Error(err);
  }
};
