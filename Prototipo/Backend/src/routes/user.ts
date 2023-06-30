import { Router } from 'express';
import { loginUser, newUser, updateUser } from '../controllers/user';
// import { getUsers, getUserByEmail, deleteUser } from '../controllers/admin';
import { getUsers } from '../controllers/admin';
import { deleteUser } from '../controllers/admin';
import { updateUser_1 } from '../controllers/admin';
import validateToken from './validate.token';
import { verifyRecaptcha } from '../controllers/seguridad';

const router = Router();

// Acceso público usuarios y administradores

router.post('/',newUser);
router.post('/',verifyRecaptcha);
// router.post('/', verifyRecaptcha ,newUser);

router.post('/login',loginUser);

// router.use(validateToken); // Middleware de validación de token para rutas protegidas

// Acceso usuarios registrados (requiere autenticación)

// router.put('/user/updateData',updateUser);

// Acceso administradores
router.get('/control',getUsers);

// router.get('/control',validateToken,getUsers);

router.put('/control:usuario',updateUser_1);

// router.get('/', getUsers);
// router.get('/users/:username', validateToken, getUserByEmail);
router.delete('/control:usuario', deleteUser);

export default router;
