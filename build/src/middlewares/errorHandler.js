"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const winstonLogger_1 = require("./winstonLogger");
const errorHandler = function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    winstonLogger_1.logger.error(err.name, { 'path': req.path, 'body': req.body, 'params': req.params, 'query': req.query });
    res.status(500).send('Internal Server Error');
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map