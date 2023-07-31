import Router from "express";
import * as todoCtrl from "../controllers/todo.controller.js";
import {verifyToken} from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/create', verifyToken, todoCtrl.createTodo);
router.get('/list', verifyToken, todoCtrl.listTodo);
router.get('/list/:id', verifyToken, todoCtrl.listTodoById);
router.put('/update/:id', verifyToken, todoCtrl.updateTodo);
router.delete('/delete/:id', verifyToken, todoCtrl.deleteTodo);

export default router;