"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    console.log("1");
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        console.log("2");
        try {
            const bearerToken = headerToken.slice(7);
            const decodedToken = jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || 'pepito123');
            if (decodedToken.rol === 'rol') {
                req.user = decodedToken;
                next();
            }
            else {
                res.status(403).json({
                    msg: 'Acceso denegado: se requiere el rol de administrador'
                });
            }
        }
        catch (error) {
            res.status(401).json({
                msg: 'Token no válido'
            });
        }
    }
    else {
        res.status(401).json({
            msg: 'Acceso denegado'
        });
    }
};
exports.default = validateToken;
