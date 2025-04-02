import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dataRoutes from './routes/dataRoutes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', dataRoutes);

export default app;
