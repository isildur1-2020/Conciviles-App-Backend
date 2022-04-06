import { Router } from "express";
export const apiRouter = Router();
import { mainController } from "../controllers/mainController";
import { infoController } from "../controllers/infoController";
import { employeeController } from "../controllers/employeeController";
import { loginController } from "../controllers/loginController";

apiRouter.post("/", mainController);
apiRouter.get("/info", infoController);
apiRouter.get("/employees", employeeController);
apiRouter.post("/login", loginController);
