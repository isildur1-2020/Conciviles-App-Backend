import { Router } from "express";
export const rootRouter = Router();
import { apiRouter } from "./apiRouter";
import { authMiddleware } from "../middleware/jwt";
import { loginController } from "../controllers/loginController";

rootRouter.use("/api", authMiddleware, apiRouter);
rootRouter.post("/login", loginController);
