import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({ item }) {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);

    const handleImageError = () => {
        setImageError(true);
        setImageLoading(false);
    };

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    return (
        <Link href={`/items/${item.id}`} className="group block">
            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105 hover:border-slate-600/50 transition-all duration-500 ease-out">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    {/* Product Image */}
                    <div className="relative h-48 lg:h-56 overflow-hidden bg-slate-700/50">
                        {!imageError ? (
                            <>
                                {imageLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-8 h-8 border-2 border-slate-600 border-t-cyan-500 rounded-full animate-spin" />
                                    </div>
                                )}
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className={`object-cover group-hover:scale-110 transition-transform duration-700 ease-out ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    onError={handleImageError}
                                    onLoad={handleImageLoad}
                                />
                            </>
                        ) : (
                            // Fallback when image fails to load
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-700/50">
                                <div className="text-center">
                                    <svg className="w-12 h-12 text-slate-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-xs text-slate-500">Image unavailable</p>
                                </div>
                            </div>
                        )}

                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                        {/* Price badge */}
                        <div className="absolute top-4 right-4">
                            <div className="px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full text-sm font-semibold text-cyan-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-all duration-300">
                                ${item.price}
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                        {/* Product Name */}
                        <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300 line-clamp-1">
                            {item.name}
                        </h3>

                        {/* Product Description */}
                        <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-300 line-clamp-2">
                            {item.description}
                        </p>

                        {/* Action Area */}
                        <div className="flex items-center justify-between">
                            {/* Price (duplicate for mobile) */}
                            <div className="lg:hidden">
                                <span className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                    ${item.price}
                                </span>
                            </div>

                            {/* View Details Button */}
                            <div className="flex items-center space-x-2 text-slate-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:translate-x-1">
                                <span className="text-sm font-medium">View Details</span>
                                <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hover border glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/20 via-transparent to-violet-500/20 transition-opacity duration-500 pointer-events-none" />
            </div>
        </Link>
    );
}
