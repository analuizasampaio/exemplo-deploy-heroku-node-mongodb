const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const index = require("./routes/index")
const filmes = require("./routes/movieRoutes")

app.use("/", index)
app.use("/filmes", filmes)

module.exports = app