import express from "express";
import morgan from "morgan";
import pkg from "../package.json" assert { type: "json" };
import authRouter from "./routes/auth.router.js";
import todoRouter from "./routes/todo.router.js";

const app = express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.use('/auth' ,authRouter);
app.use('/todo', todoRouter);

export default app;