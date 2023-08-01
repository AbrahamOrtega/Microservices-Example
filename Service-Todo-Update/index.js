import app from "./app.js";
import "./database.js";
import dotenv from 'dotenv'

dotenv.config()
app.listen(3005, () => {
    console.log("Service Update listening on port 3005");
});