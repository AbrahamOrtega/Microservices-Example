import Router from "express";
import tokenValidation from "../middlewares/auth.middleware.js";
import {updateTodo} from "../controllers/update.controller.js";

const router = Router();

router.put('/update/:id', tokenValidation, updateTodo);

export default router;