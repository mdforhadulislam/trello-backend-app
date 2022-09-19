const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const middlewares = [
    cors(),
    morgan("dev"),
    express.json(),
    express.urlencoded({ extended: false })
]

module.exports = middlewares