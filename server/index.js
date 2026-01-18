import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, 'data', 'items.json');

const app = express();

// CORS configuration for production
app.use(cors({
    origin: [
        'https://next-shop-project-final.vercel.app',
        'http://localhost:3000'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

app.use(express.json());
app.use(cookieParser());

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'NextShop Backend API is running!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Helper functions
async function readItems() {
    try {
        const raw = await fs.readFile(DATA_PATH, 'utf-8');
        return JSON.parse(raw);
    } catch (err) {
        console.log('No items file found, returning empty array');
        return [];
    }
}

async function writeItems(items) {
    await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2), 'utf-8');
}

// Auth endpoints
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body || {};

    if (email === 'admin@gmail.com' && password === '123456') {
        // Set secure cookie for production
        res.cookie('auth', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 1000 * 60 * 60 * 24, // 1 day
        });
        return res.json({ ok: true, message: 'Login successful' });
    }

    res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/api/logout', async (req, res) => {
    res.clearCookie('auth', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
    });
    res.json({ ok: true, message: 'Logout successful' });
});

// Public endpoints
app.get('/api/items', async (req, res) => {
    try {
        const items = await readItems();
        res.json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ error: 'Failed to fetch items' });
    }
});

app.get('/api/items/:id', async (req, res) => {
    try {
        const items = await readItems();
        const item = items.find((i) => i.id === req.params.id);

        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.json(item);
    } catch (error) {
        console.error('Error fetching item:', error);
        res.status(500).json({ error: 'Failed to fetch item' });
    }
});

// Protected endpoints
app.post('/api/items', async (req, res) => {
    const auth = req.cookies?.auth;

    if (auth !== 'true') {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { name, description, price, image } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const items = await readItems();
        const newItem = {
            id: uuidv4(),
            name,
            description,
            price: Number(price),
            image: image || 'https://via.placeholder.com/400x300?text=No+Image',
            createdAt: new Date().toISOString(),
        };

        items.push(newItem);
        await writeItems(items);

        res.status(201).json(newItem);
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).json({ error: 'Failed to create item' });
    }
});

// Start server
const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
    console.log(`🚀 Express server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🌐 CORS enabled for production domains`);
});
