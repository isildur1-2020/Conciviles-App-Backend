import { Router } from "express";
export const loginRouter = Router();
import { main } from "../controllers/loginController/main";
import { isUser } from "../controllers/loginController/isUser";
import { isSupervisor } from "../controllers/loginController/isSupervisor";
import { isPassword } from "../controllers/loginController/isPassword";
import { authenticated } from "../controllers/loginController/authenticated";

loginRouter.post("/", [main, isUser, isSupervisor, isPassword, authenticated]);
