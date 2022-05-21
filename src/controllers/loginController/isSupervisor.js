export const isSupervisor = (req, res, next) => {
  // VERIFICA SI ES SUPERVISOR
  req.charge = Number(req.user?.info?.["cargo6"]?.value?.ids?.[0]);
  if (req.charge !== 16)
    return res.status(200).json({
      message: "Este usuario no tiene permisos",
      err: true,
    });
  next();
};
