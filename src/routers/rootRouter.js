import path from "path";
import { Router } from "express";
export const rootRouter = Router();
import { apiRouter } from "./apiRouter";
import { authMiddleware } from "../middleware/jwt";
import { loginController } from "../controllers/loginController";

rootRouter.use("/api", authMiddleware, apiRouter);
rootRouter.post("/login", loginController);
rootRouter.get("/file", (req, res) => {
  const downloadFile = path.join(process.cwd(), "src/routers/apiRouter.js");
  res.download(downloadFile);
});
