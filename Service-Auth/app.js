import express from "express";
import morgan from "morgan";
import pkg from "../package.json" assert { type: "json" };
import productsRouter from "./routes/products.router.js";

const app = express();

app.set("pkg", pkg);
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send({
        name: app.get("pkg").name,
        author: app.get("pkg").author,
        description: app.get("pkg").description,
        version: app.get("pkg").version
    });
});

app.use('/products' ,productsRouter);

export default app;