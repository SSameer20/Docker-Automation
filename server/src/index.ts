import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import dockerRoutes from './dockerRoutes';
import mcpRoute from './mcpRoute';

const app = express(); // ✅ Declare app before using it
const port = 5000;

// ✅ Enable CORS
app.use(cors());
app.use(express.json());

// ✅ Use your routes
app.use('/', dockerRoutes);
app.use('/', mcpRoute); // Place this after dockerRoutes
app.use('/api', mcpRoute);

app.listen(port, () => {
  console.log(`Docker Automation API running at http://localhost:${port}`);
});
