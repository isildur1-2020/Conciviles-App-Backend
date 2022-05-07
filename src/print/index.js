import xlsx from "json-as-xlsx";

export const getDocumentXLSX = (data, settings) => xlsx(data, settings);
