import app from "./app.js";
import "./database.js";
import dotenv from "dotenv";

dotenv.config();
app.listen(3003, () => {
    console.log("Service Delete listening on port 3003");
});