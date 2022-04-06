import { createItem as query } from "../querys/createItem";
import { axiosInstance } from "../axios/instance";

export const createItemService = async (variables) => {
  try {
    return await axiosInstance({
      url: "/",
      method: "POST",
      data: {
        variables,
        query,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};
