import { axiosInstance } from "../axios/instance";
import { employeeQuery } from "../querys/employee";
import { dataFormat } from "../adapters/employee";

export const employeeController = async (req, res) => {
  try {
    const resp = await axiosInstance({
      url: "/",
      method: "POST",
      data: { query: employeeQuery },
    });
    const info = dataFormat(resp);
    res.status(200).json({
      data: info,
      err: false,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      data: err,
      err: true,
    });
  }
};
