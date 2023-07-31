import {Router} from "express";
import {todoCreate} from "../controllers/create.controller.js";
import tokenValidation from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/create', tokenValidation, todoCreate)

export default router
