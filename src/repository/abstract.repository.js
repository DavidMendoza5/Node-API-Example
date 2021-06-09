const { getRepository } = require('typeorm')

const createInDB = async (schema, params) => {
  try {
    const newUser = getRepository(schema).create(params)
    await getRepository(schema).save(newUser)
  } catch(err) {
    console.log(err.message)
  }
}

const getUsersInDB = async (schema) => {
  try {
    const users = await getRepository(schema).find()
    return users
  } catch(err) {
    console.log(err.message)
  }
}

module.exports = {
  createInDB,
  getUsersInDB
}