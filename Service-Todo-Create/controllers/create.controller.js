import Todo from "../models/Todo.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const todoCreate = async (req, res) => {
  try {
    const { title, description } = req.body.body
    const token = req.body.headers['x-access-token']
    const decode = jwt.decode(token, process.env.SECRET_JWT)

    const newTODO = new Todo({
      title,
      description,
      user: decode.id
    })

    newTODO.save().then(response => {
      User.findByIdAndUpdate(decode.id, {
        $push: {
          todos: response._id
        }
      }
    ).then(response => {
        res.json({message: "Todo created" })
      })
    }).catch(error => {
      res.status(500).json({message: "Server error"})
    });


  } catch (error) {
    console.log(error)
    res.status(500).send({"message": error})
  }
}