import User from "../models/User.js";
import jwt from "jsonwebtoken";
import Todo from "../models/Todo.js";

export const list = async (req, res) => {
    const token = req.headers["x-access-token"];
    const decoded = jwt.decode(token, process.env.SECRET_JWT);

    const user = await User.findOne({_id: decoded.id}).populate("todos");
    if (!user){
        console.log("No user found");
        return res.status(404).json({message: "No user found"});
    }
    res.status(200).json(user.todos);
};

export const listById = async (req, res) => {
    const id = req.params.id;

    Todo.findById(id).then(todo => {
        if (!todo){
            console.log("No todo found");
            return res.status(404).json({message: "No todo found"});
        }
        res.status(200).json(todo);
    }).catch(error => {
        res.status(500).json({message: "Server error"});
    });
};