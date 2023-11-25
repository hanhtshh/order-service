const customerModel = require("../models/customerModel");
const jwt = require('jsonwebtoken');
class AuthenticateMiddleware {
    async authenAdmin(req, res, next) {
        try {
            const isPassAuth = req.headers["x-api-key"] === process.env.API_KEY;
            if (isPassAuth) {
                next();
            }
            return res.status(401).json('Unauthorize');
        } catch (error) {
            return res.status(500).json('loi server');
        }
    }
    verifyToken(req, res, next) {
        try {
            const isPassAuth = req.headers["x-api-key"] === process.env.API_KEY;
            if (isPassAuth) {
                next();
            }
            return res.status(401).json('Unauthorize');
        } catch (error) {
            return res.status(403).json('token is not correct');
        }

    }
}
module.exports = new AuthenticateMiddleware();