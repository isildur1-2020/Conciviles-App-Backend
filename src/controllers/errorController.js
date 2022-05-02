export const errorController = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  const message = `Unhandled error: ${err}`;
  res.status(500).json({
    error: true,
    message,
  });
};
