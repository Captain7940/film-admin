import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

interface Film {
  name: string;
  author: string;
  category: string;
  cover: string;
  description: string;
}

interface User {
  username: string;
  token: string;
}

interface BorrowRequest {
  film: Film;
  user: User;
}

app.post('/api/borrows', (req: Request, res: Response) => {
  const borrowRequest: BorrowRequest = req.body;

  // Here you would typically save the borrowRequest to your database
  console.log('Borrow request received:', borrowRequest);

  // For now, we'll just send a success response
  res.status(201).json({ message: 'Film rented successfully', borrowRequest });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});