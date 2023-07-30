import app from "./app.js";
import "./database.js";

app.listen(3001, () => {
  console.log("Service Auth listening on port 3001");
});