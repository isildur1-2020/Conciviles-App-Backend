export const isSupervisor = (req, res, next) => {
  // VERIFICA SI ES SUPERVISOR
  req.charge = Number(req.user?.info?.["cargo6"]?.value?.ids?.[0]);
  //17 8 25 13
  if (
    req.charge !== 16 ||
    req.charge !== 17 ||
    req.charge !== 8 ||
    req.charge !== 25 ||
    req.charge !== 13
  )
    return res.status(200).json({
      message: "Este usuario no tiene permisos",
      err: true,
    });
  next();
};
