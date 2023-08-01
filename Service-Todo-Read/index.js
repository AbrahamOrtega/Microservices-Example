import app from "./app.js";
import "./database.js";
import dotenv from 'dotenv'

dotenv.config()
app.listen(3004, () => {
    console.log("Service Read listening on port 3004");
});