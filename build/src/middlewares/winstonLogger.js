"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
exports.logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.Console({
            handleExceptions: true,
            format: winston_1.format.combine(winston_1.format.label({ label: 'Winston Error Handler...' }), winston_1.format.timestamp(), winston_1.format.prettyPrint())
        })
    ],
    exitOnError: false
});
//# sourceMappingURL=winstonLogger.js.map