const User = require('../schema/user.schema')
const { createInDB, getInfoInDB, getInfoById, updateInfo, deleteInfo } = require('../repository/abstract.repository')

const createUser = async (req,res) => {
  try {
    const params = req.body

    const newUser = await createInDB(User, params)
    res.status(201).send({user: newUser, message: 'User created'})
  } catch(err) {
      res.status(500).send({ message: err.message })
  }
}

const getUsers = async(req, res) => {
  try {
    const users = await getInfoInDB(User)
    res.status(200).send(users)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

const getUserById = async(req, res) => {
  try {
    let user_id = req.params.id
    const user = await getInfoById(User, user_id)
    if(!user) {
      throw new Error('User not found')
    }
    res.status(200).send(user)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

const updateUser = async(req, res) => {
  try {
    let user_id = req.params.id
    let body = req.body
    const user = await getInfoById(User, user_id)
    if(!user) {
      throw new Error('User not found')
    }
    const updated_user = await updateInfo(User, user, body)
    res.status(200).send(updated_user)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

const deleteUser = async(req, res) => {
  try {
    let user_id = req.params.id
    const user = await getInfoById(User, user_id)
    if(!user) {
      throw new Error('User not found')
    }
    const results = await deleteInfo(User, user_id)
    res.status(200).send(results)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
}