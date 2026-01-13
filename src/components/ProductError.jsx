"use client";

export default function ProductError({ error }) {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto text-center">
                    <div className="
                        relative bg-red-500/10 backdrop-blur-xl border border-red-500/30 
                        rounded-2xl p-8 shadow-xl animate-in slide-in-from-bottom-4 duration-700
                    ">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-red-300 mb-2">Error Loading Product</h3>
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
        </div>
    );
}