import { mondayService } from "../../services/mondayService";
import { createBoard } from "../../querys/createBoard";
import { getAssistanceBoard } from "../../utilities/monday/boards";
import { currentFullDate } from "../../utilities/moment/timezone";

export const duplicateBoard = async (req, res, next) => {
  try {
    req.assistanceBoardId = await getAssistanceBoard();
    const variables = {
      board_id: req.assistanceBoardId,
      board_name: `Asistencia - ${currentFullDate()}`,
      keep_subscribers: true,
    };
    const resp = await mondayService({ query: createBoard, variables });
    const boardInfo = resp?.data?.data?.duplicate_board?.board;
    if (!boardInfo)
      return res.status(200).json({
        err: true,
        message: "Error al duplicar la tabla",
      });
    req.boardInfo = boardInfo;
    next();
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: err,
    });
  }
};
