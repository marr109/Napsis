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
router.get('/:alumnoId/asistencias/:asignaturaId', user_1.getAsistenciaAlumno);
router.get('/:alumnoId/calificaciones/:asignaturaId', user_1.getCalificacionesAlumno);
router.get('/:alumnoId/calendario/', user_1.getCalendarioEvaluaciones);
exports.default = router;
