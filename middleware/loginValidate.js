exports.loginValidate =(req,res,next) => {
    const { email, password } = req.body
    if(req.body && email && password)
    {
        next()
    }
    else {
        res.status(404).send({message:"email and password are required"})
    }
}