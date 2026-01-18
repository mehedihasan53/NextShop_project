import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Path to JSON data file
const DATA_PATH = path.join(process.cwd(), 'server', 'data', 'items.json');

// Helper function to read items from JSON file
async function readItems() {
    try {
        const data = await fs.readFile(DATA_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading items:', error);
        return [];
    }
}

// GET /api/items - Get all items (public)
export async function GET() {
    try {
        const items = await readItems();
        return NextResponse.json(items);
    } catch (error) {
        console.error('GET /api/items error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch items' },
            { status: 500 }
        );
    }
}