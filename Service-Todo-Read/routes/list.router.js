import Router from "express";
import * as listCtrl from "../controllers/list.controller.js";
import tokenValidation from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/list", tokenValidation, listCtrl.list);
router.get("/list/:id", tokenValidation, listCtrl.listById);

export default router;