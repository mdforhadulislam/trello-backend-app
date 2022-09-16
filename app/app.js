const express = require("express")
const app = express()
const middlewares = require("./middlewares")
const router = require("./router")

app.use(middlewares)
app.use("/",router)

module.exports = app