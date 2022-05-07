export const isUser = (req, res, next) => {
  // VERIFICA SI EL USUARIO EXISTE
  if (!req.user)
    return res.status(200).json({
      message: "Usuario inexistente",
      err: true,
    });
  next();
};
