import express from "express";
import morgan from "morgan";
import pkg from "../package.json" assert { type: "json" };
import updateRouter from "./routes/update.routes.js";

const app = express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.use('/todo' ,updateRouter);


export default app;