import express, { Request, Response } from 'express';
import { Film } from '../model';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const { current = 1, pageSize = 20, name, author, category } = req.query;
    const data = await Film.find({
        ...(name && { name }),
        ...(author && { author }),
        ...(category && { category }),
    })
      .skip((Number(current) - 1) * Number(pageSize))
      .limit(Number(pageSize));
    const total = await Film.countDocuments({
        ...(name && { name }),
        ...(author && { author }),
        ...(category && { category }),
      });
    return res.status(200).json({ data, total });
});

router.post('/', (req: Request, res: Response) => {
    const body = req.body;
    const filmModel = new Film({ ...body });
    filmModel.save();
    return res.json({ success: true });
});


export default router;
