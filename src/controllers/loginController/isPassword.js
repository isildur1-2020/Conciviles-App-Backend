export const isPassword = (req, res, next) => {
  // VERIFICA SI COINCIDE LA CONTRASEÑA
  const passwordEntered = req.body.password;
  const systemPassword = process.env.SUPERVISOR_PASSWORD;
  if (passwordEntered !== systemPassword)
    return res.status(200).json({
      message: "Contraseña incorrecta",
      err: true,
    });
  next();
};
