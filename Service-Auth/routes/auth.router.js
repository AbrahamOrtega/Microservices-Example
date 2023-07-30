import {Router} from "express";

const router = Router();

import * as authCtrl from "../controllers/auth.controller.js";

router.post('/signup', authCtrl.signUp);

router.post('/signin', authCtrl.signIn);

router.post('/verifyToken', authCtrl.verifyToken);



export default router;