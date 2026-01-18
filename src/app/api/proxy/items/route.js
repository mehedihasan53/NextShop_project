import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req) {
    const auth = cookies().get('auth')?.value;
    if (auth !== 'true') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();

    // Use environment variable for Express backend URL
    const EXPRESS_API_URL = process.env.EXPRESS_API_URL || 'http://localhost:9876';

    try {
        // Forward to Express server
        const res = await fetch(`${EXPRESS_API_URL}/api/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': req.headers.get('cookie') || ''
            },
            credentials: 'include',
            body: JSON.stringify(body),
        });

        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error('Error forwarding to Express backend:', error);
        return NextResponse.json(
            { error: 'Failed to connect to backend server' },
            { status: 500 }
        );
    }
}
