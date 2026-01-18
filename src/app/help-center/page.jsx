"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function HelpCenterPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Topics', icon: '📚' },
        { id: 'orders', name: 'Orders', icon: '📦' },
        { id: 'shipping', name: 'Shipping', icon: '🚚' },
        { id: 'returns', name: 'Returns', icon: '↩️' },
        { id: 'account', name: 'Account', icon: '👤' },
        { id: 'payment', name: 'Payment', icon: '💳' },
    ];

    const helpArticles = [
        {
            id: 1,
            title: 'How to place an order',
            category: 'orders',
            description: 'Step-by-step guide to placing your first order',
            readTime: '3 min read',
            popular: true
        },
        {
            id: 2,
            title: 'Shipping times and costs',
            category: 'shipping',
            description: 'Everything you need to know about delivery',
            readTime: '2 min read',
            popular: true
        },
        {
            id: 3,
            title: 'How to return an item',
            category: 'returns',
            description: 'Easy returns process explained',
            readTime: '4 min read',
            popular: false
        },
        {
            id: 4,
            title: 'Payment methods accepted',
            category: 'payment',
            description: 'All supported payment options',
            readTime: '2 min read',
            popular: true
        },
        {
            id: 5,
            title: 'Creating your account',
            category: 'account',
            description: 'Set up your NextShop account',
            readTime: '3 min read',
            popular: false
        },
        {
            id: 6,
            title: 'Order tracking',
            category: 'orders',
            description: 'Track your order status in real-time',
            readTime: '2 min read',
            popular: true
        }
    ];

    const filteredArticles = helpArticles.filter(article => {
        const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />
            <div className="absolute top-0 left-1/4 right-1/4 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

            {/* Floating Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
                {/* Header */}
                <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                        Help Center
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                        Find answers to your questions and get the help you need
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for help articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 pl-14 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                            />
                            <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-12 animate-in slide-in-from-bottom-4 duration-700 delay-200">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`
                                    px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm
                                    ${activeCategory === category.id
                                        ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 shadow-lg shadow-cyan-500/20'
                                        : 'bg-slate-800/40 border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'
                                    }
                                `}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Help Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {filteredArticles.map((article, index) => (
                        <div
                            key={article.id}
                            className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 hover:border-slate-600/50 hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-4"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Popular Badge */}
                            {article.popular && (
                                <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                                    Popular
                                </div>
                            )}

                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                                    {article.title}
                                </h3>
                                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-300">
                                    {article.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-500">{article.readTime}</span>
                                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                        <span className="text-sm font-medium mr-2">Read more</span>
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Support Section */}
                <div className="text-center animate-in slide-in-from-bottom-4 duration-700 delay-400">
                    <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-cyan-500/10 max-w-4xl mx-auto">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Still need help?
                            </h2>
                            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                                Can't find what you're looking for? Our support team is here to help you with any questions or concerns.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                                >
                                    Contact Support
                                </Link>
                                <button className="px-8 py-4 bg-slate-700/50 border border-slate-600/50 text-slate-300 font-semibold rounded-xl backdrop-blur-sm hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white hover:scale-105 transition-all duration-300">
                                    Live Chat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}