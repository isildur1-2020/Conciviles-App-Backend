import { mondayService } from "../../services/mondayService";
import { getEmployees } from "../../querys/employee";
import { employeesFormat } from "../../adapters/employees";

export const main = async (req, res, next) => {
  try {
    const { username } = req.body;
    let resp = await mondayService({ query: getEmployees() });
    resp = employeesFormat(resp);
    req.user = resp.find(({ info }) => info?.["texto"]?.value === username);
    next();
  } catch (err) {
    console.log(err);
    res.status(200).json({
      data: err,
      err: true,
    });
  }
};
