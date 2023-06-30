"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRecaptcha = void 0;
const axios_1 = __importDefault(require("axios"));
const verifyRecaptcha = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY_CAPTCHA}&response=${req.body.recaptcha}`;
    try {
        const response = yield axios_1.default.post(url, {});
        if (response.data.success) {
            next();
        }
        else {
            res.status(403).send({
                message: "Invalid Recaptcha"
            });
        }
    }
    catch (err) {
        res.status(500).send({
            message: "Error processing request, please try again"
        });
    }
});
exports.verifyRecaptcha = verifyRecaptcha;
