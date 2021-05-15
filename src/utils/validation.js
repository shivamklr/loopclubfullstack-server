const validator = require("validator");
const { errorResponse } = require("./errorResponse");
module.exports.isEmail = (req, res, next) => {
    try {
        const email = req.body.data.email;
        if (!validator.isEmail(email)) {
            throw new Error("EMAIL VALIDATION FAILED");
        }
        next();
    } catch (e) {
        return errorResponse(res, e, 400, "INVALID EMAIL");
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
