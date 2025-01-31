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

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await Film.findByIdAndDelete(id);
    return res.status(200).json({ success: true });
  });

  //Film edit
  router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const film = await Film.findById(id);
    if (film) {
      res.status(200).json({ data: film, success: true });
    } else {
      res.status(500).json({ message: 'That film does not exist' });
    }
  });

  router.put('/:id', async (req: Request, res: Response) => {
    const body = req.body;
    const { id } = req.params;
    await Film.findOneAndUpdate({ _id: id }, body);
    return res.status(200).json({ success: true });
  });

export default router;
