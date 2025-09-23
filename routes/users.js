const express = require("express");
const router = express.Router();
const User = require("../models/User");

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json({
      message: "Users retrieved successfully",
      count: users.length,
      users
    });
  } catch (error) {
    console.error("Get all users error:", error);
    res.status(500).json({ 
      message: "Server error while retrieving users", 
      error: error.message 
    });
  }
});

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    // Validate ObjectId format
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ 
        message: "Invalid user ID format" 
      });
    }

    const user = await User.findById(req.params.id).select("-password");
    
    if (!user) {
      return res.status(404).json({ 
        message: "User not found" 
      });
    }
    
    res.json({
      message: "User retrieved successfully",
      user
    });
  } catch (error) {
    console.error("Get user by ID error:", error);
    res.status(500).json({ 
      message: "Server error while retrieving user", 
      error: error.message 
    });
  }
});

// @route   PUT /api/users/:id
// @desc    Update user
// @access  Private
router.put("/:id", async (req, res) => {
  try {
    const { name, email } = req.body;

    // Validate ObjectId format
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ 
        message: "Invalid user ID format" 
      });
    }

    // Validate at least one field provided
    if (!name && !email) {
      return res.status(400).json({ 
        message: "At least one field (name or email) is required for update" 
      });
    }

    // Validate email format if provided
    if (email) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Please enter a valid email address" 
        });
      }
    }

    let user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ 
        message: "User not found" 
      });
    }

    // Update fields
    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();
    
    res.json({
      message: "User updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Update user error:", error);
    
    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: "Email already exists",
        error: "Duplicate email"
      });
    }
    
    res.status(500).json({ 
      message: "Server error while updating user", 
      error: error.message 
    });
  }
});

// @route   DELETE /api/users/:id
// @desc    Delete user
// @access  Private
router.delete("/:id", async (req, res) => {
  try {
    // Validate ObjectId format
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ 
        message: "Invalid user ID format" 
      });
    }

    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ 
        message: "User not found" 
      });
    }

    await User.findByIdAndDelete(req.params.id);
    
    res.json({ 
      message: "User deleted successfully",
      deletedUser: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ 
      message: "Server error while deleting user", 
      error: error.message 
    });
  }
});

module.exports = router;
