"use client";

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function ItemsList() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted before showing dynamic content
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        let isMounted = true;
        const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001';

        fetch(`${base}/api/items`)
            .then((r) => r.json())
            .then((data) => {
                if (isMounted) setItems(data);
            })
            .catch((err) => {
                if (isMounted) setError('Failed to load items. Please try again.');
            })
            .finally(() => isMounted && setLoading(false));

        return () => (isMounted = false);
    }, [mounted]);

    // Prevent hydration mismatch by not rendering dynamic content until mounted
    if (!mounted) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Static skeleton that matches server render */}
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-xl"
                        >
                            <div className="w-full h-48 bg-slate-700/50 rounded-xl mb-4" />
                            <div className="space-y-3">
                                <div className="h-6 bg-slate-700/50 rounded-lg w-3/4" />
                                <div className="h-4 bg-slate-700/50 rounded-lg w-full" />
                                <div className="h-4 bg-slate-700/50 rounded-lg w-2/3" />
                                <div className="h-8 bg-slate-700/50 rounded-lg w-1/3 mt-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Loading State
    if (loading) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Loading Skeleton Cards */}
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="
                                relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
                                rounded-2xl p-6 shadow-xl animate-pulse
                            "
                        >
                            {/* Image Skeleton */}
                            <div className="w-full h-48 bg-slate-700/50 rounded-xl mb-4" />

                            {/* Content Skeleton */}
                            <div className="space-y-3">
                                <div className="h-6 bg-slate-700/50 rounded-lg w-3/4" />
                                <div className="h-4 bg-slate-700/50 rounded-lg w-full" />
                                <div className="h-4 bg-slate-700/50 rounded-lg w-2/3" />
                                <div className="h-8 bg-slate-700/50 rounded-lg w-1/3 mt-4" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Loading Text */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center space-x-3 text-slate-400">
                        <div className="w-6 h-6 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
                        <span className="text-lg">Loading amazing products...</span>
                    </div>
                </div>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-md mx-auto text-center">
                    <div className="
                        relative bg-red-500/10 backdrop-blur-xl border border-red-500/30 
                        rounded-2xl p-8 shadow-xl
                    ">
                        {/* Error Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-red-300 mb-2">Oops! Something went wrong</h3>
                        <p className="text-red-400 mb-6">{error}</p>

                        <button
                            onClick={() => window.location.reload()}
                            className="
                                px-6 py-3 bg-red-500/20 border border-red-500/30 
                                text-red-300 font-medium rounded-lg backdrop-blur-sm
                                hover:bg-red-500/30 hover:border-red-400/50 hover:text-red-200
                                hover:scale-105 transition-all duration-300
                            "
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Empty State
    if (!items || items.length === 0) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-lg mx-auto text-center">
                    <div className="
                        relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
                        rounded-2xl p-12 shadow-xl
                    ">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl" />

                        <div className="relative z-10">
                            {/* Empty State Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-violet-500/20 rounded-full blur-xl" />
                                    <div className="relative w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center">
                                        <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-3">No Items Found</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                We couldn't find any products at the moment. Check back later for new arrivals,
                                or contact us if you think this is an error.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="
                                        px-6 py-3 bg-slate-700/50 border border-slate-600/50 
                                        text-slate-300 font-medium rounded-lg backdrop-blur-sm
                                        hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white
                                        hover:scale-105 transition-all duration-300
                                    "
                                >
                                    Refresh Page
                                </button>

                                <button
                                    onClick={() => window.history.back()}
                                    className="
                                        px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                                        border border-cyan-500/30 text-cyan-300 font-medium rounded-lg
                                        hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30
                                        hover:border-cyan-400/50 hover:text-cyan-200 hover:scale-105
                                        transition-all duration-300
                                    "
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Success State - Display Items
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="animate-in slide-in-from-bottom-4 duration-500"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <ProductCard item={item} />
                    </div>
                ))}
            </div>

            {/* Items Count */}
            <div className="text-center mt-12">
                <p className="text-slate-400">
                    Showing <span className="text-cyan-400 font-semibold">{items.length}</span>
                    {items.length === 1 ? ' product' : ' products'}
                </p>
            </div>
        </div>
    );
}
