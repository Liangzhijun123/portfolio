// server.js (Express Server)
import express, { json } from 'express';
import { get, post } from 'axios';
import { connect } from 'mongoose';

const app = express();

app.use(json());

connect('mongodb://localhost:27017/visitor-counter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const vercelBaseUrl = 'https://portfolio-liart-iota.vercel.app';

app.get('/api/visitor-count', async (req, res) => {
  try {
    const response = await get(`${vercelBaseUrl}/api/visitor-count`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/increment-visitor-count', async (req, res) => {
  try {
    const response = await post(`${vercelBaseUrl}/api/increment-visitor-count`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
