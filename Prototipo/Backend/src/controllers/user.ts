import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import  User  from '../models/user';
import Calificacion from '../models/calificacion';
import Asistencia from '../models/asistencia';
import Evaluacion from '../models/evaluacion';
import Asignatura from '../models/asignatura';
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res: Response) => {

    const { usuario, email, password, telefono, rut } = req.body;

    //Validacion de existencia del usuario en la base de datos

    const userEmail = await User.findOne({ where: { email } });

    if(userEmail){
        return res.status(400).json({
            msg: `El correo ingresado no se encuentra disponbile ${email}`
        })
    }

    const userUsuario = await User.findOne({ where: { usuario } });

    if(userUsuario){
        return res.status(400).json({
            msg: `El nombre de usuario no se encuentra disponbile ${usuario}`
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        //Se guarda usuario en la base de datos
        await User.create({
            usuario: usuario,
            email: email,
            password: hashedPassword,
            rut: rut,
            telefono: telefono
        })
    
        res.json({
            msg: `Usuario ha sido creado exitosamente`
        })        
    } catch (error) {
        res.status(400).json({
            msg: `Ups... hubo un error`,
            error
        })
    }

}

export const loginUser = async (req: Request, res: Response) => {

    const { usuario, email, password, rol, id } = req.body;
    
    //validamos si el usuario existe en la bd

    const user:any = await User.findOne({ where: { usuario } });

    if(!user){
        return res.status(400).json({
            msg: `El usuario ingresado ${usuario} no existe en la base de datos`
        })
    }

    //validamos password

    const passwordValid = await bcrypt.compare(password, user.password)
    console.log(passwordValid);

    if(!passwordValid){
        return res.status(400).json({
            msg: `La contraseña ingresada no es correcta`
        })
    }

    //generamos token

    const token = jwt.sign({
       rol: user.rol,
    }, process.env.SECRET_KEY || 'test', {
        expiresIn: '1hr'
    });

    res.json({token});
}

export const getAsistenciaAlumno = async (req: Request, res: Response) => {
    const alumnoId = req.params.alumnoId;
  
    try {
      const asistencias = await Asistencia.findAll({
        where: { UserId: alumnoId },
      });
  
      res.json(asistencias);
    } catch (error) {
      console.error('Error retrieving attendance:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  export const getCalificacionesAlumno = async (req: Request, res: Response) => {
    const alumnoId = req.params.alumnoId;
    const asignaturaId = req.params.asignaturaId;
  
    try {
      const calificaciones = await Calificacion.findAll({
        where: { UserId: alumnoId},
        // include: {
        //   model: Asignatura,
        //   attributes: ['nombre'],
        // },
      });
  
      res.json(calificaciones);
    } catch (error) {
      console.error('Error retrieving grades:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  // export const getCalificacionesAlumno = async (req: Request, res: Response) => {
  //   const alumnoId = req.params.alumnoId;
  //   const asignaturaId = req.params.asignaturaId;
  
  //   try {
  //     const calificaciones = await Calificacion.findAll({
  //       where: { UserId: alumnoId, AsignaturaId: asignaturaId },
  //       include: [{ model: Asignatura, attributes: ['nombre'] }]
  //     });
  
  //     res.json(calificaciones);
  //   } catch (error) {
  //     console.error('Error retrieving grades:', error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // };
  
  
  export const getCalendarioEvaluaciones = async (req: Request, res: Response) => {
    const alumnoId = req.params.alumnoId;
  
    try {
      const asignaturas = await Asignatura.findAll({
        include: [
          {
            model: Evaluacion,
            attributes: ['fecha', 'nombrePrueba'],
          },
        ],
        where: { UserId: alumnoId },
      });
  
      res.json(asignaturas);
    } catch (error) {
      console.error('Error retrieving evaluation calendar:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }