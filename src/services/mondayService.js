import { axiosInstance } from "../axios/instance";

export const mondayService = (body) => {
  const { variables, query } = body;
  return axiosInstance({
    url: "/",
    method: "POST",
    data: {
      variables,
      query,
    },
  });
};
