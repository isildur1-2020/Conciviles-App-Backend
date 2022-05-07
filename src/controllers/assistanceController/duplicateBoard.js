import { mondayService } from "../../services/mondayService";
import { createBoard } from "../../querys/createBoard";
import { getAssistanceBoard } from "../../utilities/monday/boards";

export const duplicateBoard = async (req, res, next) => {
  try {
    const assistanceBoardId = await getAssistanceBoard();
    const resp = await mondayService({ query: createBoard(assistanceBoardId) });
    const boardId = resp.data.data.duplicate_board.board.id;
    if (!boardId)
      return res.status(200).json({
        err: true,
        message: "Error al duplicar la tabla",
      });
    req.assitanceBoardId = boardId;
    next();
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: err,
    });
  }
};
