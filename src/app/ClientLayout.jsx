"use client";

import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useExtensionCleanup } from '@/hooks/useExtensionCleanup';
import Footer from '@/components/Footer';

function AuthNavbar() {
    const { data: session, status } = useSession();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const pathname = usePathname();

    const handleSignIn = () => {
        signIn();
    };

    const handleSignOut = async () => {
        setIsLoggingOut(true);
        try {
            await signOut({ redirect: false });
        } catch (error) {
            console.error('Sign out error:', error);
        } finally {
            setIsLoggingOut(false);
        }
    };

    const isActiveLink = (href) => pathname === href;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">N</span>
                        </div>
                        <span className="text-xl font-bold text-white">NextShop</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            href="/"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActiveLink('/')
                                ? 'bg-slate-800 text-blue-400'
                                : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/items"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActiveLink('/items')
                                ? 'bg-slate-800 text-blue-400'
                                : 'text-slate-300 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            Items
                        </Link>
                    </div>

                    {/* Authentication Section */}
                    <div className="flex items-center space-x-4">
                        {status === 'loading' ? (
                            // Loading state
                            <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800 rounded-lg">
                                <div className="w-4 h-4 border-2 border-slate-600 border-t-slate-300 rounded-full animate-spin"></div>
                                <span className="text-slate-300 text-sm">Loading...</span>
                            </div>
                        ) : session ? (
                            // Logged in - Show user info and logout button
                            <div className="flex items-center space-x-3">
                                <div className="hidden sm:flex items-center space-x-3 px-3 py-2 bg-slate-800 rounded-lg">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">
                                            {session.user.name?.charAt(0) || session.user.email?.charAt(0) || 'U'}
                                        </span>
                                    </div>
                                    <span className="text-slate-200 text-sm font-medium">
                                        {session.user.name || session.user.email}
                                    </span>
                                </div>
                                <button
                                    onClick={handleSignOut}
                                    disabled={isLoggingOut}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoggingOut ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Signing out...</span>
                                        </div>
                                    ) : (
                                        'Logout'
                                    )}
                                </button>
                            </div>
                        ) : (
                            // Logged out - Show login button
                            <button
                                onClick={handleSignIn}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default function ClientLayout({ children }) {
    const [mounted, setMounted] = useState(false);

    useExtensionCleanup();

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen flex flex-col" suppressHydrationWarning={true}>
                <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-slate-700 rounded-lg animate-pulse" />
                                <div className="text-xl font-bold text-white">NextShop</div>
                            </div>
                            <div className="w-20 h-10 bg-slate-700 rounded-lg animate-pulse" />
                        </div>
                    </div>
                </nav>
                <main className="flex-1 pt-16">
                    {children}
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col" suppressHydrationWarning={true}>
            <AuthNavbar />
            <main className="flex-1 pt-16">
                {children}
            </main>
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="dark"
            />
        </div>
    );
}