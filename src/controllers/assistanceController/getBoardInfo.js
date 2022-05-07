import { CurrentBoardModel } from "../../models/currentBoard";

export const getBoardInfo = async (req, res, next) => {
  try {
    const board = await CurrentBoardModel.findOne();
    res.status(200).json({
      board,
      err: false,
    });
  } catch (err) {
    res.status(200).json({
      err: true,
      message: err,
    });
  }
};
