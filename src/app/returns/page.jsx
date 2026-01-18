"use client";

import Link from 'next/link';

export default function ReturnsPage() {
    const returnSteps = [
        {
            step: 1,
            title: 'Initiate Return',
            description: 'Contact our support team or use our online return form',
            icon: '📝'
        },
        {
            step: 2,
            title: 'Get Return Label',
            description: 'We\'ll email you a prepaid return shipping label',
            icon: '🏷️'
        },
        {
            step: 3,
            title: 'Pack & Ship',
            description: 'Pack your item securely and attach the return label',
            icon: '📦'
        },
        {
            step: 4,
            title: 'Refund Processed',
            description: 'Receive your refund within 3-5 business days',
            icon: '💰'
        }
    ];

    const returnPolicies = [
        {
            category: 'Electronics',
            period: '30 days',
            condition: 'Original packaging required',
            restockingFee: 'None',
            icon: '📱'
        },
        {
            category: 'Clothing',
            period: '60 days',
            condition: 'Unworn with tags',
            restockingFee: 'None',
            icon: '👕'
        },
        {
            category: 'Home & Garden',
            period: '45 days',
            condition: 'Unused condition',
            restockingFee: 'None',
            icon: '🏠'
        },
        {
            category: 'Books',
            period: '30 days',
            condition: 'Unmarked condition',
            restockingFee: 'None',
            icon: '📚'
        }
    ];

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
                        Returns & Exchanges
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                        Easy returns with free return shipping and hassle-free refunds
                    </p>
                </div>

                {/* Return Process */}
                <div className="mb-16 animate-in slide-in-from-bottom-4 duration-700 delay-200">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        How Returns Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {returnSteps.map((step, index) => (
                            <div
                                key={step.step}
                                className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 hover:border-slate-600/50 hover:scale-105 transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Step Number */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {step.step}
                                </div>

                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10 text-center pt-4">
                                    <div className="text-4xl mb-4">{step.icon}</div>
                                    <h3 className="text-lg font-semibold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Return Policies by Category */}
                <div className="mb-16 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Return Policies by Category
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {returnPolicies.map((policy, index) => (
                            <div
                                key={policy.category}
                                className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <div className="flex items-center mb-6">
                                        <span className="text-3xl mr-4">{policy.icon}</span>
                                        <h3 className="text-xl font-semibold text-white">
                                            {policy.category}
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">Return Period:</span>
                                            <span className="text-cyan-400 font-medium">{policy.period}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">Condition:</span>
                                            <span className="text-violet-400 font-medium">{policy.condition}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">Restocking Fee:</span>
                                            <span className="text-emerald-400 font-medium">{policy.restockingFee}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Important Information */}
                <div className="mb-16 animate-in slide-in-from-bottom-4 duration-700 delay-400">
                    <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 lg:p-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white text-center mb-8">
                                Important Return Information
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center">
                                        <span className="mr-3">✅</span>
                                        What We Accept
                                    </h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li>• Items in original condition</li>
                                        <li>• Products with original packaging</li>
                                        <li>• Items with all accessories included</li>
                                        <li>• Unopened software and media</li>
                                        <li>• Unused gift cards</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-red-300 mb-4 flex items-center">
                                        <span className="mr-3">❌</span>
                                        What We Don't Accept
                                    </h3>
                                    <ul className="space-y-2 text-slate-400">
                                        <li>• Personalized or customized items</li>
                                        <li>• Perishable goods</li>
                                        <li>• Items damaged by misuse</li>
                                        <li>• Products past return period</li>
                                        <li>• Items without proof of purchase</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center animate-in slide-in-from-bottom-4 duration-700 delay-500">
                    <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-cyan-500/10 max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Need to Start a Return?
                            </h2>
                            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                                Our customer service team is here to help make your return process as smooth as possible.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                                >
                                    Start Return Process
                                </Link>
                                <Link
                                    href="/help-center"
                                    className="px-8 py-4 bg-slate-700/50 border border-slate-600/50 text-slate-300 font-semibold rounded-xl backdrop-blur-sm hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white hover:scale-105 transition-all duration-300"
                                >
                                    Return FAQ
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}