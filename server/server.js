import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
    origin: [
        process.env.FRONTEND_URL,
        'https://portfolio-i92o.onrender.com',
        'https://portfolio-puce-phi-a8189zd8da.vercel.app',
        'http://localhost:5174'
    ].filter(Boolean), // removes undefined if env var isn't set
    credentials: true,
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // Limit each IP to 10 requests per windowMs
    message: { success: false, message: 'Too many requests, please try again later.' },
});

// Apply rate limiting
app.use('/api', limiter);

// Routes Import
import contactRoutes from './routes/contact.routes.js';

// Routes Declaration
app.use("/api/v1/contact", contactRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
