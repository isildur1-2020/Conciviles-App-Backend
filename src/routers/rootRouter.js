import { Router } from "express";
export const rootRouter = Router();
import { apiRouter } from "./apiRouter";
import { authMiddleware } from "../middleware/jwt";
import { loginRouter } from "../routers/loginRouter";
import { downloadAssistanceController } from "../controllers/downloadAssistanceController";

rootRouter.use("/login", loginRouter);
rootRouter.use("/api", authMiddleware, apiRouter);
rootRouter.get("/downloadAssistance", downloadAssistanceController);

import { CurrentBoardModel } from "../models/currentBoard";
import { mondayBoards } from "../mondayConfig";
rootRouter.get("/setBoard", async (req, res, next) => {
  try {
    const { board } = req.params;
    const defaultBoard = 2487522424;
    await CurrentBoardModel.findByIdAndUpdate(
      mondayBoards.idAssistanceBoardDB,
      {
        id: board,
      }
    );
    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(200).end();
  }
});
