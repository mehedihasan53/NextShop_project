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

// GET /api/items/[id] - Get single item by ID
export async function GET(request, { params }) {
    try {
        const { id } = await params;

        if (!id) {
            return NextResponse.json(
                { error: 'Item ID is required' },
                { status: 400 }
            );
        }

        const items = await readItems();
        const item = items.find(item => item.id === id);

        if (!item) {
            return NextResponse.json(
                { error: 'Item not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(item);

    } catch (error) {
        console.error('GET /api/items/[id] error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}