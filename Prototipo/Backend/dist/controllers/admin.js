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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsers = exports.updateUser_1 = void 0;
const user_1 = require("../models/user");
// Modificar datos de un usuario por nombre de usuario
const updateUser_1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, rol } = req.body;
    const user = yield user_1.User.findOne({ where: { usuario } });
    try {
        if (!user) {
            return res.status(404).json({
                msg: 'El usuario no ha sido encontrado'
            });
        }
        user.rol = rol || user.rol;
        user.save();
        res.json({
            msg: `Has modificado el rol del usuario de manera exitosa`,
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hubo un error al modificar el rol del usuario`
        });
    }
});
exports.updateUser_1 = updateUser_1;
// Obtener lista de usuarios
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.User.findAll();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({
            msg: `Hubo un error al obtener la lista de usuarios`
        });
    }
});
exports.getUsers = getUsers;
// Buscar un usuario por nombre de usuario
// export const getUserByEmail = async (req: Request, res: Response) => {
//   const { email } = req.body;
//   try {
//     const user = await User.findOne({ where: { email } });
//     if (!user) {
//       return res.status(404).json({
//         msg: 'El correo electronico no ha sido encontrado'
//       });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({
//       msg: `Hubo un error al buscar el correo electronico`
//     });
//   }
// };
// Eliminar un usuario por nombre de usuario
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario } = req.params;
    try {
        const user = yield user_1.User.findOne({ where: { usuario: usuario } });
        if (!user) {
            return res.status(404).json({
                msg: 'El usuario no ha sido encontrado'
            });
        }
        yield user.destroy();
        res.json({
            msg: `El usuario ha sido eliminado correctamente`
        });
    }
    catch (error) {
        console.error('Error al eliminar el usuario', error);
        res.status(500).json({
            msg: `Hubo un error al eliminar el usuario`,
        });
    }
});
exports.deleteUser = deleteUser;
