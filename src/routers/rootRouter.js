import { Router } from "express";
export const rootRouter = Router();
import { apiRouter } from "./apiRouter";
import { authMiddleware } from "../middleware/jwt";
import { loginController } from "../controllers/loginController";
import { print } from "../print/index";

rootRouter.use("/api", authMiddleware, apiRouter);
rootRouter.post("/login", loginController);
rootRouter.get("/file", print);
