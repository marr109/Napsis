import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Interfaz personalizada para extender la interfaz Request
interface CustomRequest extends Request {
  user?: any; // Propiedad user para almacenar la información del usuario decodificado
}
  const validateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];

    console.log("1");

    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
      console.log("2");
      try {
        const bearerToken = headerToken.slice(7);
        const decodedToken: any = jwt.verify(bearerToken, process.env.SECRET_KEY || 'pepito123');

        if (decodedToken.rol === 'rol') {
          req.user = decodedToken;
          next();
        } else {
          res.status(403).json({
            msg: 'Acceso denegado: se requiere el rol de administrador'
          });
        }
      } catch (error) {
        res.status(401).json({
          msg: 'Token no válido'
        });
      } 
    } else {
      res.status(401).json({
        msg: 'Acceso denegado'
      });
    }
  };

export default validateToken;
