import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { rootRouter } from "./routers/rootRouter";
const app = express();

app.set("PORT", process.env.PORT || 3456);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(app.get("PORT"), () => {
  console.log(`Listening on port ${app.get("PORT")}`);
});
