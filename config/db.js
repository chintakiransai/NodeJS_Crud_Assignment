const mongoose = require('mongoose')
let dbConnect = async () =>
{
try {
    await mongoose.connect(process.env.DB_URL).then(conn =>
    {
        if(conn)
        {
            console.log("DataBase Connected Sucessfully");
        }
    })
} catch (error) {
    console.log("error :"+ error);
}
}

module.exports = dbConnect


