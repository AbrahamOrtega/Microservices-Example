import Todo from "../models/Todo.js";
import jwt from "jsonwebtoken";

export const todoCreate = async (req, res) => {
  try {
    const { title, description } = req.body
    const token = req.headers['x-access-token']
    const decode = jwt.decode(token, process.env.SECRET_JWT)

    const newTODO = new Todo({
      title,
      description,
      user: decode.id
    })

    const saveTODO = await newTODO.save()
    res.json({message: "Todo created" })

  } catch (error) {
    res.status(500).send({"message": error})
  }
}