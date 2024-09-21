import express, { Express, Request, Response, NextFunction } from 'express';
import { User } from '../model';
import { SECRET_KEY } from '../constant';
import jwt from 'jsonwebtoken';
var router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const { name, password } = req.body;
    const user = await User.findOne({ name, password });
    if(user) {
        const token = jwt.sign({id: user._id}, SECRET_KEY , {expiresIn: "1h"})
        res.status(200).json({ data: user, success: true, token });
    }else {
      res.status(500).json({message: 'Wrong username or password'});
    }
  });

export default router;
