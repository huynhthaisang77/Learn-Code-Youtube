import userApiService from '../service/userApiService'
import roleApiService from '../service/roleApiService'

const readFunc = async (req, res) => {
  try {
    let data = await roleApiService.getAllRoles()
    return res.status(200).json({
      EM: data.EM, // Error Message
      EC: data.EC, // Error Code
      DT: data.DT // Data
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Data
    })
  }
}

const createFunc = async (req, res) => {
  try {
    let data = await roleApiService.createNewRoles(req.body)
    return res.status(200).json({
      EM: data.EM, // Error Message
      EC: data.EC, // Error Code
      DT: data.DT // Data
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Data
    })
  }
}

// todo
const updateFunc = async (req, res) => {
  try {
    let data = await userApiService.updateUser(req.body)
    return res.status(200).json({
      EM: data.EM, // Error Message
      EC: data.EC, // Error Code
      DT: data.DT // Data
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Data
    })
  }
}

const deleteFunc = async (req, res) => {
  try {
    let data = await userApiService.deleteRole(req.body.id)
    return res.status(200).json({
      EM: data.EM, // Error Message
      EC: data.EC, // Error Code
      DT: data.DT // Data
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Data
    })
  }
}

const getUserAccount = async (req, res) => {
  return res.status(200).json({
    EM: 'ok',
    EC: 0,
    DT: {
      access_token: req.token,
      groupWithRoles: req.user.groupWithRoles,
      email: req.user.email,
      username: req.user.username
    }
  })
}

module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
  getUserAccount
}
