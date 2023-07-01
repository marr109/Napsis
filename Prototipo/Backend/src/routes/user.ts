import { Router } from 'express';
import { getAsistenciaAlumno, getCalendarioEvaluaciones, getCalificacionesAlumno, loginUser, newUser} from '../controllers/user';
import { verifyRecaptcha } from '../controllers/seguridad';

const router = Router();

router.post('/',newUser);
router.post('/',verifyRecaptcha);
router.post('/login',loginUser);

// metodos alumnos

router.get('/alumnos/:alumnoId/asistencias', getAsistenciaAlumno);
router.get('/alumnos/:alumnoId/calificaciones', getCalificacionesAlumno);
router.get('/alumnos/:alumnoId/calendario', getCalendarioEvaluaciones);



export default router;
