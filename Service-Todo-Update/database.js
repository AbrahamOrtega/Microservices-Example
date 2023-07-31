import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect('mongodb://127.0.0.1:27017/MicroservicesDB',)
    .then(() => console.log("DB is connected")).
    catch((error) => console.log(error));