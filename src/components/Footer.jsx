"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [hoveredSocial, setHoveredSocial] = useState(null);

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/items', label: 'Products' },
        { href: '/contact', label: 'Contact' },
    ];

    const supportLinks = [
        { href: '/help-center', label: 'Help Center' },
        { href: '/shipping-info', label: 'Shipping Info' },
        { href: '/returns', label: 'Returns' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="relative bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 mt-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/3 to-violet-500/3" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-5">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center space-x-3 group">
                            <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-xl">N</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">NextShop</h3>
                                <p className="text-sm text-slate-400 mt-1">Premium E-commerce</p>
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-md">
                            Your premium destination for smart gadgets, fitness gear, and lifestyle products.
                        </p>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm font-medium text-slate-300">Follow us:</span>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onMouseEnter={() => setHoveredSocial(index)}
                                        onMouseLeave={() => setHoveredSocial(null)}
                                        className="relative group"
                                        aria-label={social.name}
                                    >
                                        <div className={`relative w-10 h-10 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-700/60 hover:border-slate-600/50 hover:text-white hover:scale-110 transition-all duration-300 ${hoveredSocial === index ? 'shadow-lg shadow-cyan-500/20' : ''}`}>
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white relative">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white relative">Support</h4>
                        <ul className="space-y-3">
                            {supportLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-violet-400 transition-colors duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
                    <p className="text-slate-400 text-sm">© 2026 NextShop. All rights reserved.</p>
                    <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <span>Made with</span>
                        <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse" />
                        <span>by Mehedi Hasan</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
