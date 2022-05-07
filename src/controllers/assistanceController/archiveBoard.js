import { mondayService } from "../../services/mondayService";
import { archiveBoard as query } from "../../querys/archiveBoard";
import { getAssistanceBoard } from "../../utilities/monday/boards";

export const archiveBoard = async (req, res, next) => {
  try {
    const variables = {
      board_id: req.assistanceBoardId,
    };
    const resp = await mondayService({ query, variables });
    const isArchive = resp?.data?.data?.archive_board?.id;
    if (!isArchive)
      return res.status(200).json({
        err: true,
        message: "Error al archivar la tabla",
      });
    next();
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: "Error al archivar la tabla",
    });
  }
};
