module.exports.errorResponse = function (res, e, statusCode, message) {
    if (!statusCode) {
        statusCode = e.statusCode;
    }
    return res
        .status(statusCode)
        .json({ errors: { body: [message, e.message] } });
};
