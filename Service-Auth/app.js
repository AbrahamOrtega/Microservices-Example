import express from "express";
import morgan from "morgan";
import pkg from "../package.json" assert { type: "json" };
import authRouter from "./routes/auth.router.js";
import userRouter from "./routes/user.router.js";

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

app.use('/auth' ,authRouter);
app.use('/user', userRouter);

export default app;