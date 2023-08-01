import express from "express";
import pkg from "../package.json" assert { type: "json" };
import morgan from "morgan";
import deleteRouter from "./routes/delete.router.js";

const app = express();

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send({
        name: app.get("pkg").name,
        author: app.get("pkg").author,
        description: app.get("pkg").description,
        version: app.get("pkg").version
    });
});

app.use('/todo/delete', deleteRouter);

export default app