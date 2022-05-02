import { axiosInstance } from "../axios/instance";
import { employeeQuery } from "../querys/employee";
import { dataFormat } from "../adapters/employee";
import { sign } from "../utilities/jwt/index";

export const loginController = async (req, res) => {
  try {
    const { body } = req;
    const { username, password } = body;
    const resp = await axiosInstance({
      url: "/",
      method: "POST",
      data: { query: employeeQuery },
    });
    const info = dataFormat(resp);
    const user = info.find(({ label }) => label === username);
    if (!user)
      return res.status(200).json({
        message: "Usuario inexistente",
        err: true,
      });
    const name = user?.info?.[0]?.value;
    const charge = Number(user?.info?.[1]?.value?.ids?.[0]);
    if (charge !== 16)
      return res.status(200).json({
        message: "Este usuario no tiene permisos",
        err: true,
      });
    if (password !== process.env.SUPERVISOR_PASSWORD)
      return res.status(200).json({
        message: "Contraseña incorrecta",
        err: true,
      });
    res.status(200).json({
      message: "Authenticated",
      err: false,
      supervisor: name,
      token: sign("nothing"),
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      data: err,
      err: true,
    });
  }
};
