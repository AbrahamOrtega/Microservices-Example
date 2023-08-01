import User from "../models/User.js";
import jwt from "jsonwebtoken";
import Todo from "../models/Todo.js";

export const deleteTodo = async (req, res) => {
    try{
        const token = req.headers["x-access-token"];
        const decoded = jwt.verify(token, process.env.SECRET_JWT);
        const id = req.params.id;

        Todo.findByIdAndDelete(id).then(todo => {
            if (!todo) {
                console.log("Todo not found with id " + id);
                return res.status(404).send({
                    message: "Todo not found with id " + id
                });
            }
            User.findByIdAndUpdate(decoded.id,{
                $pull: {todos: id}
            }).then(user => {

            }).catch(error => {
                res.status(500).json({ message: "Server error"});
            });
            res.send({message: "Todo deleted successfully!"});
        });
    }catch (error) {
        res.status(500).json({ message: "Server error"});
    }
};