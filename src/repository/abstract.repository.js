const { getRepository } = require('typeorm')

const createInDB = async (schema, params) => {
  try {
    const newData = getRepository(schema).create(params)
    const data = await getRepository(schema).save(newData)
    return data
  } catch(err) {
    console.log(err.message)
  }
}

const getInfoInDB = async (schema) => {
  try {
    const data = await getRepository(schema).find()
    return data
  } catch(err) {
    console.log(err.message)
  }
}

module.exports = {
  createInDB,
  getInfoInDB
}