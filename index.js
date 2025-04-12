const express = require("express");

const Router = require("./routes/user");
const { connectToMongo } = require("./connect");

const app = express();
const PORT = 4000;

// connection

connectToMongo("mongodb://127.0.0.1:27017/app-user").then(() =>
  console.log("Mongo db connected")
);

// middleware
app.use(express.json());

// routes
app.use("/users", Router);

app.listen(PORT, () => {
  console.log(`Started started at localhost:${PORT}`);
});
