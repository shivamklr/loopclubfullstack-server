const express = require("express");
const router = express.Router();
const { addUser } = require("../controllers/users");

// POST /api/user/
router.post("/", addUser);
module.exports = router;
