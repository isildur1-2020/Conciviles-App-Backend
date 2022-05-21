import { sign } from "../../utilities/jwt/index";

export const authenticated = (req, res) => {
  // AUTENTICACIÓN
  const { username } = req.body;
  const supervisor = req.user?.info.get("apellidos_y_nombre")?.value;
  const credentials = {
    username,
    supervisor,
    rol: req.charge,
  };
  res.status(200).json({
    message: "Authenticated",
    err: false,
    credentials,
    token: sign(credentials),
  });
};
