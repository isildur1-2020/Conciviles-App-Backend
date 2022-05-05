import "dotenv/config";
import "./database/mongo";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { variables } from "./config";
import { rootRouter } from "./routers/rootRouter";
import { errorController } from "./controllers/errorController";
const app = express();

app.set("PORT", variables.port);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);
app.use(errorController);

app.listen(app.get("PORT"), () => {
  console.log(`Listening on port ${app.get("PORT")}`);
});
