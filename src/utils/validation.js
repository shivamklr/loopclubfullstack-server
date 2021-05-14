const validator = require("validator");
const { errorResponse } = require("./errorResponse");
module.exports.isEmail = (req, res, next) => {
    try {
        const email = req.body.data.email;
        if (!validator.isEmail(email)) {
            throw new Error("INVALID EMAIL");
        }
        next();
    } catch (e) {
        return errorResponse(res, e, 400, e.message);
    }
};
module.exports.sanitizeEmail = (req, res, next) => {
    try {
        const email = req.body.data.email;
        req.body.data.email = validator.normalizeEmail(email);
        next();
    } catch (e) {
        return errorResponse(res, e, 422, "CANNOT SANITIZE");
    }
};
