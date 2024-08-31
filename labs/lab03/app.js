const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
require("dotenv").config();

const app = express();
const url = process.env.MONGO_URL;
const port = process.env.PORT;

mongoose.connect(url);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ласкаво просимо до API користувачів та завдань");
});

app.use(userRouter);
app.use("/tasks", taskRouter);

app.listen(port, () => {
    console.log(`Сервер слухає на порті ${port}`);
});

module.exports = app;
