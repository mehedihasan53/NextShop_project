export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />
            <div className="absolute top-0 left-1/4 right-1/4 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
                {/* Back Button Skeleton */}
                <div className="mb-8">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-lg animate-pulse">
                        <div className="w-5 h-5 bg-slate-600/50 rounded" />
                        <div className="w-24 h-4 bg-slate-600/50 rounded" />
                    </div>
                </div>

                {/* Product Details Container Skeleton */}
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden animate-pulse">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-12">
                        {/* Image Section Skeleton */}
                        <div className="space-y-6">
                            {/* Main Image Skeleton */}
                            <div className="aspect-square bg-slate-700/50 rounded-2xl border border-slate-600/30" />

                            {/* Info Cards Skeleton */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-4 text-center">
                                    <div className="w-16 h-8 bg-slate-600/50 rounded mx-auto mb-2" />
                                    <div className="w-12 h-3 bg-slate-600/50 rounded mx-auto" />
                                </div>
                                <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-4 text-center">
                                    <div className="flex justify-center space-x-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-4 h-4 bg-slate-600/50 rounded" />
                                        ))}
                                    </div>
                                    <div className="w-12 h-3 bg-slate-600/50 rounded mx-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Details Section Skeleton */}
                        <div className="space-y-8">
                            {/* Title & Description Skeleton */}
                            <div className="space-y-4">
                                <div className="w-3/4 h-10 bg-slate-600/50 rounded-lg" />
                                <div className="space-y-2">
                                    <div className="w-full h-4 bg-slate-600/50 rounded" />
                                    <div className="w-5/6 h-4 bg-slate-600/50 rounded" />
                                    <div className="w-4/5 h-4 bg-slate-600/50 rounded" />
                                </div>
                            </div>

                            {/* Features Skeleton */}
                            <div className="space-y-4">
                                <div className="w-32 h-6 bg-slate-600/50 rounded" />
                                <div className="space-y-3">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-slate-600/50 rounded-full" />
                                            <div className="w-40 h-4 bg-slate-600/50 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Specifications Skeleton */}
                            <div className="space-y-4">
                                <div className="w-36 h-6 bg-slate-600/50 rounded" />
                                <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 space-y-3">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex justify-between items-center py-2">
                                            <div className="w-24 h-4 bg-slate-600/50 rounded" />
                                            <div className="w-20 h-4 bg-slate-600/50 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons Skeleton */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 h-14 bg-slate-600/50 rounded-xl" />
                                <div className="w-full sm:w-32 h-14 bg-slate-600/50 rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Loading Indicator */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center space-x-3 text-slate-400">
                        <div className="w-6 h-6 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
                        <span className="text-lg">Loading product details...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}