const express = require("express");
const { handleGetAllUsers, GetUsersByID, handleCreateUser, handleUpdateUser } = require("../controllers/user");
const User = require("../models/user"); // ✅ Import User Model

const router = express.Router();

// ✅ GET all users
router.get("/", handleGetAllUsers);

// ✅ GET user by ID
router.get("/:id",GetUsersByID);

// ✅ POST new user
router.post("/", handleCreateUser);

// ✅ PATCH (Update user)
router.patch("/:id", handleUpdateUser);

// ✅ DELETE user
router.delete("/:id", handleUpdateUser);

module.exports = router;
