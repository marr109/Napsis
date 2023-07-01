"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const seguridad_1 = require("../controllers/seguridad");
const router = (0, express_1.Router)();
router.post('/', user_1.newUser);
router.post('/', seguridad_1.verifyRecaptcha);
router.post('/login', user_1.loginUser);
// metodos alumnos
router.get('/alumnos/:alumnoId/asistencias', user_1.getAsistenciaAlumno);
router.get('/alumnos/:alumnoId/calificaciones', user_1.getCalificacionesAlumno);
router.get('/alumnos/:alumnoId/calendario-evaluaciones', user_1.getCalendarioEvaluaciones);
exports.default = router;
