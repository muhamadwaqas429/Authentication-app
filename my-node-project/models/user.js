const mongoose = require("mongoose");

// ✅ Define Schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    jobTitle: { type: String, required: true },
    gender: { type: String, required: true }
});

// ✅ Correct Model Export
module.exports = mongoose.model("User", userSchema);
