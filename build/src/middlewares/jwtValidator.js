"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtValidator = void 0;
const jwt = require("jsonwebtoken");
const constants_1 = require("../constants/constants");
const jwtValidator = (req, res, next) => {
    let accessToken = req.headers['access-token'];
    if (!accessToken) {
        res.status(401).send("Unauthorized user");
        next();
    }
    jwt.verify(accessToken, constants_1.JWT_SECRET_KEY, (err) => {
        err ? res.status(403).send("Forbidden") : next();
    });
};
exports.jwtValidator = jwtValidator;
//# sourceMappingURL=jwtValidator.js.map