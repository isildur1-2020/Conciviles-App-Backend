import { axiosInstance } from "../axios/instance";
import { getEmployees } from "../querys/employee";
import { employeesFormat } from "../adapters/employees";

export const employeeController = async (req, res) => {
  try {
    const resp = await axiosInstance({
      url: "/",
      method: "POST",
      data: { query: getEmployees() },
    });
    const info = employeesFormat(resp);
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
