import axios from "axios";

const createTodo = async (req, res) => {
    axios.post(process.env.SERVICE_TODO_CREATE_URL + "/todo/create", {headers: req.headers, body:req.body}).then(response => {
        if (response.status !== 200) {
            res.status(response.status).json(response.data);
        }
        res.json(response.data);
    }).catch(error => {
        res.status(500).json({ message: "Server error"});
    })
}

const listTodo = async (req, res) => {
    axios.get(process.env.SERVICE_TODO_READ_URL + "/todo/list", {headers: req.headers}).then(response => {
        if (response.status !== 200) {
            res.status(response.status).json(response.data);
        }
        res.json(response.data);
    }).catch(error => {
        res.status(500).json({ message: "Server error"});
    })
}

const listTodoById = async (req, res) => {
    axios.get(process.env.SERVICE_TODO_READ_URL + "/todo/list/" + req.params.id, {headers: req.headers, body:req.body}).then(response => {
        if (response.status !== 200) {
            res.status(response.status).json(response.data);
        }
        res.json(response.data);
    }).catch(error => {
        res.status(500).json({ message: "Server error"});
    })
}

const updateTodo = async (req, res) => {
    axios.put(process.env.SERVICE_TODO_UPDATE_URL + "/todo/update/" + req.params.id, {headers: req.headers, body: req.body}).then(response => {
        if (response.status !== 200) {
            res.status(response.status).json(response.data);
        }
        res.json(response.data);
    }).catch(error => {
        res.status(500).json({ message: "Server error"});
    })
}

const deleteTodo = async (req, res) => {
    axios.delete(process.env.SERVICE_TODO_DELETE_URL + "/todo/delete/"+ req.params.id, {headers: req.headers}).then(response => {
        if (response.status !== 200) {
            res.status(response.status).json(response.data);
        }
        res.json(response.data);
    }).catch(error => {
        res.status(500).json({ message: "Server error"});
    })
}

export { createTodo, listTodo, listTodoById, updateTodo, deleteTodo };