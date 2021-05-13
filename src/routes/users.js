const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { errorResponse } = require("../utils/errorResponse");
// GET /api/users/
router.get("/", async (req, res) => {
    try {
        const users = await User.find().lean();
        return res.status(200).json({ data: { users } });
    } catch (error) {
        return errorResponse(res, error, 422, "GET REQUEST FAILED");
    }
});
module.exports = router;
