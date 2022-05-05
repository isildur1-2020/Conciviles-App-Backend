import xlsx from "json-as-xlsx";
import { assistance } from "../querys/assistance";
import { createBoard } from "../querys/createBoard";
import { axiosInstance } from "../axios/instance";
import { CurrentBoardModel } from "../models/currentBoard";

const columns = [
  { label: "APELLIDOS Y NOMBRES", value: "APELLIDOS Y NOMBRES" },
  { label: "CARGO", value: "CARGO" },
  { label: "CLASE", value: "CLASE" },
  { label: "UBICACIÓN", value: "UBICACIÓN" },
  { label: "Fecha", value: "Fecha" },
  { label: "Turno", value: "Turno" },
  { label: "Hora Entrada", value: "Hora Entrada" },
  { label: "Hora Salida", value: "Hora Salida" },
  { label: "NOVEDAD", value: "NOVEDAD" },
  { label: "Observaciones", value: "Observaciones" },
  { label: "Supervisor/Inspector", value: "Supervisor/Inspector" },
  { label: "Coordinador/Residente", value: "Coordinador/Residente" },
  { label: "Jefe de Area", value: "Jefe de Area" },
  { label: "H. E Diurna", value: "H. E Diurna" },
  { label: "H. E Nocturna", value: "H. E Nocturna" },
  { label: "H.E Diurna Festiva", value: "H.E Diurna Festiva" },
  { label: "H.E Nocturna Festiva", value: "H.E Nocturna Festiva" },
  { label: "Revisión GH", value: "Revisión GH" },
];

const getBoard = async () => {
  try {
    const resp = await CurrentBoardModel.findOne();
    const { id: currentBoardId } = resp;
    return currentBoardId;
  } catch (err) {
    throw new Error(err);
  }
};

export const print = async (req, res) => {
  try {
    const idBoard = await getBoard();
    const resp = await axiosInstance({
      url: "/",
      method: "POST",
      data: { query: assistance(idBoard) },
    });
    const items = resp.data.data.boards[0].items;
    const info = items.map(({ column_values }) => {
      return column_values.reduce((prev, curr) => {
        const { title, text } = curr;
        return {
          ...prev,
          [title]: text,
        };
      }, {});
    });

    let data = [
      {
        sheet: "Asistencia",
        columns,
        content: [...info],
      },
    ];

    const settings = {
      writeOptions: {
        type: "buffer",
        bookType: "xlsx",
      },
    };

    const buffer = xlsx(data, settings);
    res.writeHead(200, {
      "Content-Type": "application/octet-stream",
      "Content-disposition": "attachment; filename=newsletter-emails.xlsx",
    });

    const resp2 = await axiosInstance({
      url: "/",
      method: "POST",
      data: { query: createBoard(idBoard) },
    });
    const newBoardId = resp2.data.data.duplicate_board.board.id;

    await CurrentBoardModel.findByIdAndUpdate("62743d06e8306765d7e1608a", {
      id: newBoardId,
    });

    res.end(buffer);
  } catch (err) {
    console.log(err);
  }
};
