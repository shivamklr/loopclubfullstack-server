const { errorResponse } = require("../utils/errorResponse");
const User = require("../models/User");

// add a new user to the database
module.exports.addUser = async (req, res) => {
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
        user = await User.create({ email });
        return res.status(201).json({ data: { user } });
    } catch (error) {
        return errorResponse(res, error, 422, "COULD NOT CREATE NEW USER");
    }
};

// get all users in the database
module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().lean();
        return res.status(200).json({ data: { users } });
    } catch (error) {
        return errorResponse(res, error, 422, "GET REQUEST FAILED");
    }
};
