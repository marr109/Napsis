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
exports.getCalificacionesAlumno = void 0;
const getCalificacionesAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const alumnoId = req.params.alumnoId;
    //   try {
    //     const calificaciones = await Calificacion.findAll({
    //       where: { UserId: alumnoId },
    //     });
    //     res.json(calificaciones);
    //   } catch (error) {
    //     console.error('Error retrieving grades:', error);
    //     res.status(500).json({ error: 'Internal server error' });
    //   }
    // };
});
exports.getCalificacionesAlumno = getCalificacionesAlumno;
//   const alumnoId = req.params.alumnoId;
//   try {
//     const calificaciones = await Calificacion.findAll({
//       where: { UserId: alumnoId },
//     });
//     res.json(calificaciones);
//   } catch (error) {
//     console.error('Error retrieving grades:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
