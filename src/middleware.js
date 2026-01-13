import { NextResponse } from 'next/server';

export function middleware(req) {
    const { pathname } = req.nextUrl;
    if (pathname.startsWith('/add-item')) {
        const auth = req.cookies.get('auth')?.value;
        if (auth !== 'true') {
            const url = req.nextUrl.clone();
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/add-item/:path*', '/add-item'],
};
