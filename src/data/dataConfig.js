require('dotenv').config()
const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(() => {
            console.log("Conectadissimas no MongoDB Atlas!")
        })
        .catch((error) => {
            console.log("Algo deu errado para conectar no MongoDB Atlas!");
            console.error(error);
        })
}
module.exports = { connect }