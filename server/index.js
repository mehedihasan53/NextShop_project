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
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? ['https://your-domain.com'] // Replace with your actual domain
        : true,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// helper: read items
async function readItems() {
    try {
        const raw = await fs.readFile(DATA_PATH, 'utf-8');
        return JSON.parse(raw);
    } catch (err) {
        return [];
    }
}

async function writeItems(items) {
    await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2), 'utf-8');
}

// auth endpoints
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body || {};
    if (email === 'admin@gmail.com' && password === '123456') {
        // set cookie
        res.cookie('auth', 'true', {
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 24, // 1 day
        });
        return res.json({ ok: true });
    }
    res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/api/logout', async (req, res) => {
    res.clearCookie('auth');
    res.json({ ok: true });
});

// public endpoints
app.get('/api/items', async (req, res) => {
    const items = await readItems();
    res.json(items);
});

app.get('/api/items/:id', async (req, res) => {
    const items = await readItems();
    const item = items.find((i) => i.id === req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
});

// protected add endpoint (checks for auth cookie)
app.post('/api/items', async (req, res) => {
    const auth = req.cookies?.auth;
    if (auth !== 'true') return res.status(401).json({ error: 'Unauthorized' });

    const { name, description, price, image } = req.body;
    if (!name || !description || !price) return res.status(400).json({ error: 'Missing fields' });

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
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
