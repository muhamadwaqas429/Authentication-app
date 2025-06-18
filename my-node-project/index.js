const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user"); // ✅ Import User model
const userRouter= require("./routes/user");
const {connect}= require("./connect");
const app = express();

// Connect to MongoDB
connect("mongodb://localhost:27017/userDB");
app.use(express.json());
app.use("/", userRouter);
// ✅ Start Server
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
