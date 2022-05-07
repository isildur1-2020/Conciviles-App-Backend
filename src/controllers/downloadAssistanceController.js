import { getAssistanceBoard } from "../utilities/monday/boards";
import { mondayService } from "../services/mondayService";
import { assistance } from "../querys/assistance";
import { formatAssistance } from "../adapters/formatAssistance";
import { assistanceSettings } from "../print/settings/assistanceSettings";
import { getDocumentXLSX } from "../print/index";

export const downloadAssistanceController = async (req, res) => {
  try {
    const assistanceBoardId = await getAssistanceBoard();
    const resp = await mondayService({ query: assistance(assistanceBoardId) });
    const info = formatAssistance(resp);
    const { data, settings } = assistanceSettings(info);
    res.writeHead(200, {
      "Content-Type": "application/octet-stream",
      "Content-disposition": "attachment; filename=asistencia-conciviles.xlsx",
    });
    const buffer = getDocumentXLSX(data, settings);
    res.end(buffer);
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err: true,
      message: "No se ha podido cargar el documento",
    });
  }
};
