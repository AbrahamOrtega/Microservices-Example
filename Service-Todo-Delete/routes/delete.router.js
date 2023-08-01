import Router from "express";
import {deleteTodo} from "../controllers/delete.controller.js";
import tokenValidation from "../middlewares/auth.middleware.js";

const router = Router();

router.delete("/:id", tokenValidation, deleteTodo);

export default router;