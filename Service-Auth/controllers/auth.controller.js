import User from "../models/User.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

export const signUp = async (req, res) => {

    const {username, email, password} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });

    const savedUser = await newUser.save();
    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 // 24 hours
    })

    res.json({token});
}

export const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email}).populate("roles");

    if(!userFound) return res.status(400).json({message: "User not found"});

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: "Invalid password"});
    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400 // 24 hours
    })
    res.json({token: token});
}

export const verifyToken = async (req, res) => {
    const token = req.headers['x-access-token'];

    if(!token) return res.status(403).json({message: "No token provided"});

    const decoded = jwt.verify(token, config.SECRET)
    console.log(decoded);

    const user = await User.findById(decoded.id, {password: 0});
    if(!user) return res.status(404).json({message: "No user found"});

    res.json({verify: true, message: "Token is valid"});
}