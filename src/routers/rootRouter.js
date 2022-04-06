import { Router } from "express";
export const rootRouter = Router();
import { apiRouter } from "./apiRouter";

rootRouter.use("/api", apiRouter);
