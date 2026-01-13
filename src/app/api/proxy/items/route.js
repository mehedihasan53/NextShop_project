import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req) {
    const auth = cookies().get('auth')?.value;
    if (auth !== 'true') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    // forward to Express server
    const res = await fetch('http://localhost:4000/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
}
