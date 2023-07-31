import app from "./app.js";
import "./database.js";
import dotenv from 'dotenv'

dotenv.config()
app.listen(3002, () => {
  console.log("Service Create listening on port 3002");
});