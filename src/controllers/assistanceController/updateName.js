import { mondayService } from "../../services/mondayService";
import { boardInfo } from "../../querys/boardInfo";
import { getAssistanceBoard } from "../../utilities/monday/boards";
import { CurrentBoardModel } from "../../models/currentBoard";
import { mondayBoards } from "../../mondayConfig";

export const updateName = async (req, res, next) => {
  try {
    const assistanceBoardId = await getAssistanceBoard();
    const resp = await mondayService({ query: boardInfo(assistanceBoardId) });
    const boardName = resp?.data?.data?.boards?.[0]?.name;
    await CurrentBoardModel.findByIdAndUpdate(
      mondayBoards.idAssistanceBoardDB,
      {
        name: boardName,
      }
    );
    next();
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: "Error al acualizar la tabla de asistencia",
    });
  }
};
