import User from "../models/User.js";
import jwt from "jsonwebtoken";

const tokenValidation = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if(!token) return res.status(403).json({message: "No token provided"});

    const decoded = jwt.decode(token, process.env.SECRET_JWT);

    User.findOne({_id: decoded.id}).then(user => {
        if (!user) return res.status(404).json({message: "No user found"});
        next();
    }).catch(error => {
        res.status(500).json({message: "Server error"});
    });
}

export default tokenValidation;