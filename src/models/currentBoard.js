import mongoose from "mongoose";
const { Schema, model } = mongoose;

const CurrentBoard = Schema(
  {
    id: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const CurrentBoardModel = model(
  "CurrentBoard",
  CurrentBoard,
  "current-board-conciviles"
);
