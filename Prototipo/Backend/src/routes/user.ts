import { Router } from 'express';
import { getAsistenciaAlumno, getCalendarioEvaluaciones, getCalificacionesAlumno, loginUser, newUser} from '../controllers/user';
import { verifyRecaptcha } from '../controllers/seguridad';

const router = Router();

router.post('/',newUser);
router.post('/',verifyRecaptcha);
router.post('/login',loginUser);

// metodos alumnos

router.get('/:alumnoId/asistencias/:asignaturaId', getAsistenciaAlumno);
router.get('/:alumnoId/calificaciones/:asignaturaId', getCalificacionesAlumno);
router.get('/:alumnoId/calendario', getCalendarioEvaluaciones);



export default router;
