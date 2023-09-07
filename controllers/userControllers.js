const userModel = require('../models/userModels.js')
const bcrypt = require('bcrypt')
exports.registerUser = async (req,res) => {
    try {
        const { name, email, password } = req.body
        const userExist = await userModel.findOne({email})

        //Password encrpt
        // const salt =await bcrypt.genSalt(10)
        // await bcrypt.hash(password, salt).then(hashPassword => {
        //     if(hashPassword)
        //     { 
        //         const password = hashPassword
        //     }
        // })
        // bcrypt.compare()

        if(!userExist)
        {
        const userExists = await userModel.create({ name, email, password })
        res.status(200).json({
            success:true,
            message: "User created Sucessfully"
        })
    }
    else {
        res.status(404).json({
            success:false,
            message: "User already created with his email"
        })
    }
    } catch (error) {
        res.status(501).json({
            success:false,
            message: error.message
        })
    }
}


exports.loginUser = async (req,res) => {
    try {
        const { email, password } = req.body
        const userData = await userModel.findOne({email})
        if(userData)
        {
            if(userData.password == password)
            {
                console.log(userData.password);
            res.status(200).json({
                message: "User Login Sucessfully"
            })
            }
            else {
                res.status(401).json({
                    message: "Please Enter Correct Password"
            })
            }
        }
        else {
            res.status(404).json({
                message: "User Not Register"
            })
        }
        
    } catch (error) {
        res.status(501).json({
            message: error.message
        })
    }
}