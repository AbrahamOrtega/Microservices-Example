import {Router} from "express";
import * as createAuth from '../middlewares/auth.controller.js'
import {create} from "../controllers/create.controller.js";

const router = Router

router.post(createAuth, '/create', create)

export default router
