import {Router} from "express";
import {create} from "../controllers/create.controller.js";
import tokenValidation from "../middlewares/auth.middleware.js";

const router = Router

router.post(create, '/create', tokenValidation, create)

export default router
