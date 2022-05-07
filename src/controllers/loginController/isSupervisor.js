export const isSupervisor = (req, res, next) => {
  // VERIFICA SI ES SUPERVISOR
  const charge = Number(req.user?.info?.[1]?.value?.ids?.[0]);
  if (charge !== 16)
    return res.status(200).json({
      message: "Este usuario no tiene permisos",
      err: true,
    });
  next();
};
