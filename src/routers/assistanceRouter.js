import { Router } from "express";
export const assistanceRouter = Router();
import { duplicateBoard } from "../controllers/assistanceController/duplicateBoard";
import { updateBoard } from "../controllers/assistanceController/updateBoard";
import { getBoardInfo } from "../controllers/assistanceController/getBoardInfo";
import { archiveBoard } from "../controllers/assistanceController/archiveBoard";

assistanceRouter.get("/", duplicateBoard, archiveBoard, updateBoard);
assistanceRouter.get("/info", getBoardInfo);
