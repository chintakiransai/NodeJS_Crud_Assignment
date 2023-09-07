const express = require('express')
const { registerUser, loginUser } = require('../controllers/userControllers')
const { registerValidate }=require('../middleware/registerValidate.js')
const { loginValidate }=require('../middleware/loginValidate.js')
const userRoutes = express.Router()
userRoutes.post('/registerUser',registerValidate,registerUser)
userRoutes.post('/loginUser',loginValidate,loginUser)

module.exports = userRoutes