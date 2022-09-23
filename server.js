require("dotenv").config();
// const http = require("http");
// const app = require("./app/app");

const express = require("express")
const app = express()
const middlewares = require("./app/middlewares")
const router = require("./app/router")

app.use(middlewares)
app.use("/",router)

const port = process.env.PORT || 5000;

// const server = http.createServer(app);

// server.listen(port, () => {
//   console.log(`Server Running Port http://localhost:${port}`);
//   require("./db/dbConfig");
// });

app.listen(port, () => {
  console.log(`Server Running Port http://localhost:${port}`);
  require("./db/dbConfig");
});