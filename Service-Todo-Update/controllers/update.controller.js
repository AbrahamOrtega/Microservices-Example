import Todo from "../models/Todo.js";

export const updateTodo = async (req, res) => {
    try{
        const id = req.params.id;
        const { title, description, done } = req.body.body;

        Todo.findByIdAndUpdate(id, { title, description, done }).then(todo => {
            if(!todo) return res.status(404).json({message: "Todo not found"});
            return res.json({message: "Todo was updated successfully"});
        });
    }catch (error){
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
};