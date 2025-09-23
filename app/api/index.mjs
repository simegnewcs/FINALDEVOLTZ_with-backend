import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Your existing routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Export as Vercel serverless function
export default async (req, res) => {
  return app(req, res);
};