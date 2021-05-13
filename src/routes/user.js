const express = require("express");
const router = express.Router();
const { addUser } = require("../controllers/users");
const { sanitizeEmail, isEmail } = require("../utils/validation");

// POST /api/user/
router.post("/", isEmail, sanitizeEmail, addUser);
module.exports = router;
