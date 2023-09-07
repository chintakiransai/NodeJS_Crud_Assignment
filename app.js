require('dotenv').config()
const express = require('express')
const app = express()
const dbConnect = require('./config/db.js')
dbConnect()
const userRoutes = require('./routes/userRoutes.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',userRoutes)

module.exports = app

//Testing Token and verify
// const jwt = require('jsonwebtoken')
// const secertKey = process.env.JWT_SECRET
// const token = jwt.sign({id:"1234696544"},secertKey)
// const detoken = jwt.verify(token,secertKey)

       