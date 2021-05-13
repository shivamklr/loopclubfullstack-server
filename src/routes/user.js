const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { errorResponse } = require("../utils/errorResponse");
// POST /api/user/
router.post("/", async (req, res) => {
    //TODO: validate user email

    try {
        const {
            data: { email },
        } = req.body;
        let user = await User.findOne({ email }).lean();
        if (user) {
            // user found in db
            throw new Error("USER ALREADY EXIST");
        }
        user = await User.create({ email }).lean();
        return res.status(201).json({ data: { user } });
    } catch (error) {
        return errorResponse(res, error, 422, "COULD NOT CREATE NEW USER");
    }
});
module.exports = router;
