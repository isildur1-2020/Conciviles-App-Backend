import { findItem as query } from "../querys/findItem";
import { axiosInstance } from "../axios/instance";

export const findItemService = async (variables) => {
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
