"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.validation = exports.queryParamSchema = void 0;
const Joi = require("joi");
exports.queryParamSchema = Joi.object({
    query: Joi.string().required()
});
exports.validation = Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string()
        .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
        .required(),
    age: Joi.number()
        .integer()
        .min(4)
        .max(130)
        .required()
});
exports.loginValidator = Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string()
        .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
        .required()
});
//# sourceMappingURL=validator.js.map