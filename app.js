require("dotenv").config()
const express = require('express');
const logger = require('morgan');
const app = express();
const cors = require("cors")

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const accountRouter = require("./routers/accountRoutes");
const userRouter = require("./routers/userRoutes");
const boardRouter = require("./routers/boardRoutes");
const listRouter = require("./routers/listRoutes");
const taskRouter = require("./routers/taskRoutes");
const checkLogin = require("./middlewares/checkLogin");


app.get("/", (_req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.use("/api/v1/auth/", userRouter);
app.use("/api/v1/auth/account", checkLogin, accountRouter);
app.use("/api/v1/boards", checkLogin, boardRouter);
app.use("/api/v1/lists", checkLogin, listRouter);
app.use("/api/v1/tasks", checkLogin, taskRouter);




module.exports = app;
