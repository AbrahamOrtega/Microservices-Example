import Router from "express";

const router = Router();

import {getUser} from "../controllers/user.controller.js";

router.get('/user', getUser);

export default router;