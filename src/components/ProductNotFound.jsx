"use client";

import Link from 'next/link';

export default function ProductNotFound() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center">
                    <div className="
                        relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
                        rounded-2xl p-12 shadow-xl animate-in slide-in-from-bottom-4 duration-700
                    ">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl" />

                        <div className="relative z-10">
                            {/* Not Found Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-orange-500/20 rounded-full blur-xl" />
                                    <div className="relative w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center">
                                        <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <h1 className="text-2xl font-bold text-white mb-3">Product Not Found</h1>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Sorry, we couldn't find the product you're looking for. It may have been removed or the link might be incorrect.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/items"
                                    className="
                                        px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
                                        text-white font-medium rounded-lg shadow-lg shadow-cyan-500/30
                                        hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105
                                        transition-all duration-300
                                    "
                                >
                                    Browse All Products
                                </Link>

                                <button
                                    onClick={() => window.history.back()}
                                    className="
                                        px-6 py-3 bg-slate-700/50 border border-slate-600/50 
                                        text-slate-300 font-medium rounded-lg backdrop-blur-sm
                                        hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white
                                        hover:scale-105 transition-all duration-300
                                    "
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}