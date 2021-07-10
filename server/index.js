
const express = require("express"); 
const app = express(); 
const port = 5000;
const cors = require("cors");
const todoRouter = require("./routes/todo_route");
const db = require("./db");
const memberdb = require("./routes/member_route");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/json
app.use(bodyParser.json());
app.use(cookieParser());


db();
app.use(express.json());
app.use(cors());

app.use("/api/users", memberdb);
app.use("/api/todo", todoRouter);

db();
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

