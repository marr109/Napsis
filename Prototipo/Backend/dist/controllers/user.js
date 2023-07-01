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
exports.getCalendarioEvaluaciones = exports.getCalificacionesAlumno = exports.getAsistenciaAlumno = exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const calificacion_1 = __importDefault(require("../models/calificacion"));
const asistencia_1 = __importDefault(require("../models/asistencia"));
const evaluacion_1 = __importDefault(require("../models/evaluacion"));
const asignatura_1 = __importDefault(require("../models/asignatura"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, email, password } = req.body;
    //Validacion de existencia del usuario en la base de datos
    const userEmail = yield user_1.default.findOne({ where: { email } });
    if (userEmail) {
        return res.status(400).json({
            msg: `El correo ingresado no se encuentra disponbile ${email}`
        });
    }
    const userUsuario = yield user_1.default.findOne({ where: { usuario } });
    if (userUsuario) {
        return res.status(400).json({
            msg: `El nombre de usuario no se encuentra disponbile ${usuario}`
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        //Se guarda usuario en la base de datos
        yield user_1.default.create({
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
    const user = yield user_1.default.findOne({ where: { email } });
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
const getAsistenciaAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alumnoId = req.params.alumnoId;
    try {
        const asistencias = yield asistencia_1.default.findAll({
            where: { UserId: alumnoId },
        });
        res.json(asistencias);
    }
    catch (error) {
        console.error('Error retrieving attendance:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getAsistenciaAlumno = getAsistenciaAlumno;
const getCalificacionesAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alumnoId = req.params.alumnoId;
    try {
        const calificaciones = yield calificacion_1.default.findAll({
            where: { UserId: alumnoId },
        });
        res.json(calificaciones);
    }
    catch (error) {
        console.error('Error retrieving grades:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getCalificacionesAlumno = getCalificacionesAlumno;
const getCalendarioEvaluaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alumnoId = req.params.alumnoId;
    try {
        const asignaturas = yield asignatura_1.default.findAll({
            include: [
                {
                    model: evaluacion_1.default,
                    attributes: ['fecha', 'nombrePrueba'],
                },
            ],
            where: { UserId: alumnoId },
        });
        res.json(asignaturas);
    }
    catch (error) {
        console.error('Error retrieving evaluation calendar:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getCalendarioEvaluaciones = getCalendarioEvaluaciones;
