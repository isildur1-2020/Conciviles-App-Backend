import { CurrentBoardModel } from "../../models/currentBoard";
import { mondayBoards } from "../../mondayConfig";

export const updateBoard = async (req, res) => {
  try {
    const { id, name } = req.boardInfo;
    await CurrentBoardModel.findByIdAndUpdate(
      mondayBoards.idAssistanceBoardDB,
      { id, name }
    );
    res.status(200).json({
      err: false,
      message: "Tabla duplicada exitosamente",
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: "No se ha podido actualizar MongoDB",
    });
  }
};
