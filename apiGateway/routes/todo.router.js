import Router from "express";
import * as todoCtrl from "../controllers/todo.controller.js";

const router = Router();

router.post('/create', todoCtrl.createTodo);
router.get('/list', todoCtrl.listTodo);
router.get('/list/:id', todoCtrl.listTodoById);
router.put('/update/:id', todoCtrl.updateTodo);
router.delete('/delete/:id', todoCtrl.deleteTodo);

export default router;