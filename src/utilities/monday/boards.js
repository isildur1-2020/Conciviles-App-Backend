import { CurrentBoardModel } from "../../models/currentBoard";

export const getAssistanceBoard = async () => {
  try {
    const { id: assistanceBoardId } = await CurrentBoardModel.findOne();
    return assistanceBoardId;
  } catch (err) {
    console.log(err);
  }
};
