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
exports.updateUser = exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, email, password } = req.body;
    //Validacion de existencia del usuario en la base de datos
    const userEmail = yield user_1.User.findOne({ where: { email } });
    if (userEmail) {
        return res.status(400).json({
            msg: `El correo ingresado no se encuentra disponbile ${email}`
        });
    }
    const userUsuario = yield user_1.User.findOne({ where: { usuario } });
    if (userUsuario) {
        return res.status(400).json({
            msg: `El nombre de usuario no se encuentra disponbile ${usuario}`
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        //Se guarda usuario en la base de datos
        yield user_1.User.create({
            usuario: usuario,
            email: email,
            password: hashedPassword
        });
        res.json({
            msg: `Usuario ${email} creado exitosamente`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Ups... hubo un error`,
            error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, email, password, rol } = req.body;
    //validamos si el usuario existe en la bd
    const user = yield user_1.User.findOne({ where: { email } });
    if (!user) {
        return res.status(400).json({
            msg: `El correo ingresado ${email} no existe en la base de datos`
        });
    }
    //validamos password
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    console.log(passwordValid);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `La contraseña ingresada no es correcta`
        });
    }
    //generamos token
    const token = jsonwebtoken_1.default.sign({
        // rol : "usuario",
        rol: user.rol,
    }, process.env.SECRET_KEY || 'test', {
        expiresIn: '1hr'
    });
    res.json({ token });
});
exports.loginUser = loginUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, email, password, rol } = req.body;
    const user = yield user_1.User.findOne({ where: { usuario } });
    if (user) {
        user.usuario = usuario || user.usuario;
        user.email = email || user.email;
        user.rol = rol || user.rol;
        if (password) {
            user.password = yield bcrypt_1.default.hash(password, 10);
        }
        yield user.save();
        res.json({
            msg: `Haz modificado tus datos de manera exitosa`,
            data: user
        });
    }
    else {
        res.status(404).json({
            msg: `El usuario no ha sido encontrado`
        });
    }
});
exports.updateUser = updateUser;
