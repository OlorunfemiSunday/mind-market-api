const express = require("express");
const { signupUser, signinUser } = require("../controllers/authController");
const router = express.Router();

// POST /api/auth/signup
router.post("/signup", signupUser);

// POST /api/auth/signin
router.post("/signin", signinUser);

module.exports = router;
