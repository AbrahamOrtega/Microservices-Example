
const createTodo = async (req, res) => {
    res.send("createTodo");
}

const listTodo = async (req, res) => {
    res.send("listTodo");
}

const listTodoById = async (req, res) => {
    res.send("listTodoById");
}

const updateTodo = async (req, res) => {
    res.send("updateTodo");
}

const deleteTodo = async (req, res) => {
    res.send("deleteTodo");
}

export { createTodo, listTodo, listTodoById, updateTodo, deleteTodo };