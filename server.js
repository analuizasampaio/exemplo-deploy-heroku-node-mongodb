const app = require("./src/app")
const db = require("./src/data/dataConfig")

db.connect()
const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`alô, Pepe Moreno? to ligando na ${PORT}`)
})