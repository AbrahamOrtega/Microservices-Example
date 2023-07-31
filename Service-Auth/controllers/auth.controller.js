import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {

    try{
        const {username, email, password} = req.body;

        const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password)
        });

        const savedUser = await newUser.save();
        const token = jwt.sign({id: savedUser._id}, process.env.SECRET_JWT, {
            expiresIn: 86400 // 24 hours
        })

        res.json({token});
    }catch (error) {
        res.status(500).json({message: "Server error"});
    }
}

export const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email});

    if(!userFound) return res.status(400).json({message: "User not found"});

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: "Invalid password"});
    const token = jwt.sign({id: userFound._id}, process.env.SECRET_JWT, {
        expiresIn: 86400 // 24 hours
    })
    res.json({token: token});
}
