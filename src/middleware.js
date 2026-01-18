import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

/**
 * Middleware to protect routes that require authentication using NextAuth
 * Checks for valid NextAuth JWT token and redirects to login if not authenticated
 */
export default withAuth(
    function middleware(req) {
        const { pathname } = req.nextUrl;

        // List of protected routes - Product details pages require authentication
        const protectedRoutes = ['/items/'];

        // Check if current path is protected (product details pages)
        const isProtectedRoute = protectedRoutes.some(route =>
            pathname.startsWith(route) && pathname !== '/items' // /items list page is public, but /items/[id] is protected
        );

        // If accessing protected route without authentication, redirect to login
        if (isProtectedRoute && !req.nextauth.token) {
            const loginUrl = req.nextUrl.clone();
            loginUrl.pathname = '/login';
            loginUrl.searchParams.set('callbackUrl', pathname);
            return NextResponse.redirect(loginUrl);
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                const { pathname } = req.nextUrl;

                // Allow access to public routes
                if (pathname === '/' || pathname === '/items' || pathname === '/login') {
                    return true;
                }

                // For product details pages, require authentication
                if (pathname.startsWith('/items/')) {
                    return !!token;
                }

                // Allow all other routes
                return true;
            },
        },
    }
);

export const config = {
    // Match product details pages and login page
    matcher: ['/items/:path*', '/login'],
};
