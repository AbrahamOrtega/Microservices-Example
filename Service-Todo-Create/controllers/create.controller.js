import Todo from "../models/Todo.js";
import jwt from "jsonwebtoken";

export const create = async (req, res) => {
  try {
    const { title, description } = req.body
    const token = req.headers['x-access-token']
    const decode = jwt.decode(token, process.env.SECRET_JWT).id

    const newTODO = new Todo({
      title,
      description,
      decode
    })

    const saveTODO = await newTODO.save()
    res.json({ saveTODO })

  } catch (error) {
    res.status(500).send({"message": error})
  }
}