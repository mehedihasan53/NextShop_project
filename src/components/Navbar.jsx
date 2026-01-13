"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Navbar() {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        setAuth(Cookies.get('auth') === 'true');
    }, []);

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        // best effort: also call server logout
        try {
            const expressUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            await fetch(`${expressUrl}/api/logout`, { method: 'POST', credentials: 'include' });
        } catch (e) { }
        Cookies.remove('auth');
        setAuth(false);
        window.location.href = '/login';
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="font-semibold text-lg">NextShop</Link>
                <div className="flex items-center gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/items">Items</Link>
                    {!auth ? (
                        <Link href="/login" className="px-3 py-1 rounded-md bg-indigo-600 text-white">Login</Link>
                    ) : (
                        <>
                            <Link href="/add-item" className="px-3 py-1 rounded-md bg-green-600 text-white">Add Item</Link>
                            <button onClick={handleLogout} className="px-3 py-1 rounded-md bg-red-600 text-white">Logout</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
