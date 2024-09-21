import express, { Request, Response } from "express";
var router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  
  return res.status(200).json({ success: true });
});

export default router;
