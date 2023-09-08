const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type:String,
        required : true
    },
    email: {
        type:String,
        required : true,
        unquie : true
    },
    password: {
        type:String,
        required : true,
        minlength: 8
    },
}, {
    timestamps :true
})

const userModel = mongoose.model("RegisterUser",userSchema)
module.exports = userModel
