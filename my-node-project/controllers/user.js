const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    console.log("✅ GET /users route hit!"); // Debug log
    try {
        const users = await User.find(); 
        console.log("✅ Users fetched:", users); // Debug log
        res.status(200).json(users);
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        res.status(500).json({ message: "Error fetching users", error });
    }
}


async function GetUsersByID(req,res){
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
}

async function handleCreateUser(req, res) {
    try {
            const { firstName, email, password, jobTitle, gender } = req.body;
            if (!firstName || !email || !password || !jobTitle || !gender) {
                return res.status(400).json({ message: "Missing required fields" });
            }
            const newUser = new User({ firstName, email, password, jobTitle, gender });
            await newUser.save();
            res.status(201).json({ message: "User created successfully", user: newUser });
        } catch (error) {
            res.status(500).json({ message: "Error adding user", error: error.message });
        }
}

async function handleUpdateUser(req, res) {
    try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({ message: "User updated successfully", user: updatedUser });
        } catch (error) {
            res.status(500).json({ message: "Error updating user", error: error.message });
        }
}

async function handleDeleteUser(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
}
module.exports = { handleGetAllUsers,GetUsersByID ,handleCreateUser,handleUpdateUser,handleUpdateUser};
