"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    // Handle mounting to prevent hydration issues
    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
    }, []);

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation links configuration
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/items', label: 'Items' },
    ];

    // Check if link is active
    const isActiveLink = (href) => pathname === href;

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return (
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50" suppressHydrationWarning={true}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 lg:h-18 items-center justify-between">
                        <div className="text-xl lg:text-2xl font-bold text-white">NextShop</div>
                        <div className="w-20 h-10 bg-slate-700/50 rounded-lg animate-pulse" />
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <>
            {/* Main Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-cyan-500/10' : 'bg-slate-900/60 backdrop-blur-lg border-b border-slate-800/30'}`} suppressHydrationWarning={true}>
                {/* Gradient overlay for premium effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 pointer-events-none" />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 lg:h-18 items-center justify-between">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                        >
                            <div className="relative">
                                {/* Logo background glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

                                {/* Logo icon */}
                                <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-sm">N</span>
                                </div>
                            </div>

                            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                                NextShop
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20 ${isActiveLink(link.href) ? 'text-cyan-300 bg-white/10 shadow-lg shadow-cyan-500/20' : 'text-slate-300 hover:text-white'}`}
                                >
                                    {/* Active link indicator */}
                                    {isActiveLink(link.href) && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg" />
                                    )}

                                    {/* Hover underline effect */}
                                    <span className="relative z-10">{link.label}</span>
                                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${isActiveLink(link.href) ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`} />
                                </Link>
                            ))}
                        </div>

                        {/* Sign In Button */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link
                                href="/login"
                                className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 overflow-hidden group"
                            >
                                {/* Button glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                                <span className="relative z-10">Sign In</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            aria-label="Toggle mobile menu"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                                <span className={`block w-5 h-0.5 bg-white rounded-full mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block w-5 h-0.5 bg-white rounded-full mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden transition-all duration-300 ease-out" suppressHydrationWarning={true}>
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Menu Content */}
                    <div className="absolute top-16 left-4 right-4 bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-cyan-500/10 p-6 transform transition-all duration-300 ease-out">
                        {/* Mobile Navigation Links */}
                        <div className="space-y-3 mb-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 ${isActiveLink(link.href) ? 'text-cyan-300 bg-white/10 shadow-lg shadow-cyan-500/20' : 'text-slate-300 hover:text-white'}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Sign In Button */}
                        <div className="space-y-3 pt-4 border-t border-slate-700/50">
                            <Link
                                href="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 text-center"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}