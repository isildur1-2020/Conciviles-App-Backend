import { sign } from "../../utilities/jwt/index";

export const authenticated = (req, res) => {
  // AUTENTICACIÓN
  const supervisor = req.user?.info?.[0]?.value;
  res.status(200).json({
    message: "Authenticated",
    err: false,
    supervisor,
    token: sign("supervisor"),
  });
};
