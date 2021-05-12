const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { errorResponse } = require("../utils/errorResponse");
// POST /api/user/
router.post("/", async (req, res) => {
    //TODO: validate user email
    //TODO: return error if already exists
    const { email } = req.body;
    try {
        const user = await User.find({ email });
        return res.status(200).json({ data: { user } });
    } catch (error) {
        return errorResponse(res, error, 422, "POST REQUEST FAILED");
    }
});
module.exports = router;
