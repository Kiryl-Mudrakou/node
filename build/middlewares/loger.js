"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const log = function (req, res, next) {
    console.log("\x1b[36m%s%s1\x1b[0m", '\npath: ', req.originalUrl, '\nbody:', req.body, '\nparams :', req.params, '\nqueryParams:', req.query, "\n");
    next();
};
exports.log = log;
//# sourceMappingURL=loger.js.map