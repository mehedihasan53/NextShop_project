"use client";

import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            // call Next.js auth route to set cookie on this domain
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) {
                const data = await res.json();
                setError(data.error || 'Login failed');
                setLoading(false);
                return;
            }
            // optional: call Express login to sync their cookie (best-effort)
            try {
                const expressUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
                await fetch(`${expressUrl}/api/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ email, password }),
                });
            } catch (e) { }
            // set a client-visible cookie for UI state
            Cookies.set('auth', 'true');
            router.push('/items');
        } catch (err) {
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-20">
            <div className="max-w-md mx-auto rounded bg-white p-6 shadow">
                <h2 className="text-xl font-semibold">Admin Login</h2>
                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="border p-2 rounded" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" className="border p-2 rounded" />
                    {error && <div className="text-red-600">{error}</div>}
                    <button className="mt-2 rounded bg-indigo-600 px-4 py-2 text-white" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
                </form>
                <div className="mt-4 text-sm text-gray-600">Use <strong>admin@gmail.com</strong> / <strong>123456</strong></div>
            </div>
        </div>
    );
}
