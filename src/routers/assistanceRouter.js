import { Router } from "express";
export const assistanceRouter = Router();
import { duplicateBoard } from "../controllers/assistanceController/duplicateBoard";
import { updateBoard } from "../controllers/assistanceController/updateBoard";
import { getBoardInfo } from "../controllers/assistanceController/getBoardInfo";
import { updateName } from "../controllers/assistanceController/updateName";

assistanceRouter.get("/", duplicateBoard, updateName, updateBoard);
assistanceRouter.get("/info", getBoardInfo);
