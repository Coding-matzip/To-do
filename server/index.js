const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo_route");
const db = require("./db");
const app = express();

db();
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoRouter);


app.listen(3001, () => console.log(`Listening on port 3001...`));