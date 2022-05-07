import { Router } from "express";
export const apiRouter = Router();
import { mainController } from "../controllers/mainController";
import { infoController } from "../controllers/infoController";
import { employeeController } from "../controllers/employeeController";
import { assistanceRouter } from "../routers/assistanceRouter";

apiRouter.post("/", mainController);
apiRouter.use("/assistance", assistanceRouter);
apiRouter.get("/info", infoController);
apiRouter.get("/employees", employeeController);
