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
    const { boardId } = req.query;
    const defaultBoard = 2487522424;
    await CurrentBoardModel.findByIdAndUpdate(
      mondayBoards.idAssistanceBoardDB,
      {
        id: boardId,
      }
    );
    res.status(200).json({
      message: `Board successfully changed to ${boardId}`,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      message: `Error on set board ID`,
    });
  }
});
