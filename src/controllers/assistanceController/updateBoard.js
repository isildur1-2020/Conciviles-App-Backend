import { CurrentBoardModel } from "../../models/currentBoard";
import { mondayBoards } from "../../mondayConfig";

export const updateBoard = async (req, res) => {
  try {
    await CurrentBoardModel.findByIdAndUpdate(
      mondayBoards.idAssistanceBoardDB,
      {
        id: req.assitanceBoardId,
      }
    );
    res.status({
      err: false,
      message: "Tabla duplicada exitosamente",
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: err,
    });
  }
};
