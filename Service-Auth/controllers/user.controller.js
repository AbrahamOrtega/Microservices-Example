import User from "../models/User.js";

export const getUser = async (req, res) => {
    const token = req.headers['x-access-token'];
    const user = await User.findById(token, {_id: 0, password: 0, todos: 0});
    if(!user) return res.status(404).json({message: "No user found"});
    res.json(user);
};
