import { NextResponse } from 'next/server';

export async function POST(req) {
    const { email, password } = await req.json();
    if (email === 'admin@gmail.com' && password === '123456') {
        const res = NextResponse.json({ ok: true });
        res.cookies.set('auth', 'true', { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 });
        return res;
    }
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
