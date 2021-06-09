const User = require('../schema/user.schema')
const { createInDB, getInfoInDB } = require('../repository/abstract.repository')

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

module.exports = {
  createUser,
  getUsers
}