import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

export const verifyRecaptcha = async (req: Request, res: Response, next: NextFunction) => {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY_CAPTCHA}&response=${req.body.recaptcha}`;

  try {
    const response = await axios.post(url, {});
    
    if (response.data.success) {
      next();
    } else {
      res.status(403).send({
        message: "Invalid Recaptcha"
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error processing request, please try again"
    });
  }
};
