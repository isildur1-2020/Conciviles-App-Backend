import { Router } from "express";
export const rootRouter = Router();
import { apiRouter } from "./apiRouter";
import { authMiddleware } from "../middleware/jwt";
import { loginRouter } from "../routers/loginRouter";
import { downloadAssistanceController } from "../controllers/downloadAssistanceController";

rootRouter.use("/login", loginRouter);
rootRouter.use("/api", authMiddleware, apiRouter);
rootRouter.get("/downloadAssistance", downloadAssistanceController);
