"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = void 0;
const adminMiddleware = (req, res, next) => {
    const { usuario, email, password, rol } = req.body;
    if (rol !== 'admin') {
        return res.status(403).json({ error: 'User is not an admin' });
    }
    next();
};
exports.adminMiddleware = adminMiddleware;
