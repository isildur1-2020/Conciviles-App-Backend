import { infoQuery } from "../querys/info";
import { dataFormat } from "../adapters/info";
import { getAssistanceBoard } from "../utilities/monday/boards";
import { mondayService } from "../services/mondayService";

export const infoController = async (req, res) => {
  try {
    const assistanceBoardId = await getAssistanceBoard();
    const resp = await mondayService({ query: infoQuery(assistanceBoardId) });
    const info = dataFormat(resp);
    res.status(200).json({
      data: info,
      err: false,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      data: err,
      err: true,
    });
  }
};
