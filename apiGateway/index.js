import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();
app.listen(3000, () => {
    console.log("Gateway listening on port 3000");
    console.log(process.env.AUTH_ENDPOINT);
});