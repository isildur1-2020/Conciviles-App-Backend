import { verify } from "../utilities/jwt/index";

export const authMiddleware = (req, res, next) => {
  const { headers } = req;
  const token = headers["authorization"];
  const isValid = verify(token);
  if (isValid) return next();
  res.status(403).json({
    message: "Unauthorized",
  });
};
