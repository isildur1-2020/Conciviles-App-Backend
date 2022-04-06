import { Router } from "express";
export const authRouter = Router();
import { loginController } from "../controllers/loginController";

authRouter.post("/login", loginController);
