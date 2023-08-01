import express from "express";
import morgan from "morgan";
import pkg from "../package.json" assert { type: "json" };
import listRouter from "./routes/list.router.js";


const app = express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.use('/todo' ,listRouter);


export default app;