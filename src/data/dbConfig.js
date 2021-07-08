require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGODB_URI

const connect = () => {
    mongoose.connect(MONGO_URL,
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