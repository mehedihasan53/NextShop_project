"use client";

export default function ShippingInfoPage() {
    const shippingOptions = [
        {
            name: 'Standard Shipping',
            time: '5-7 business days',
            cost: 'Free on orders over $50',
            description: 'Our most popular shipping option with reliable delivery times.',
            icon: '📦'
        },
        {
            name: 'Express Shipping',
            time: '2-3 business days',
            cost: '$9.99',
            description: 'Faster delivery for when you need your items quickly.',
            icon: '⚡'
        },
        {
            name: 'Overnight Shipping',
            time: '1 business day',
            cost: '$19.99',
            description: 'Next-day delivery for urgent orders.',
            icon: '🚀'
        }
    ];

    const shippingZones = [
        { region: 'United States', time: '3-7 business days', cost: 'Free over $50' },
        { region: 'Canada', time: '5-10 business days', cost: 'Free over $75' },
        { region: 'Europe', time: '7-14 business days', cost: 'Free over $100' },
        { region: 'Asia Pacific', time: '10-21 business days', cost: 'Free over $100' },
        { region: 'Rest of World', time: '14-28 business days', cost: 'Free over $150' }
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
                        Shipping Information
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                        Fast, reliable shipping worldwide with tracking included on all orders
                    </p>
                </div>

                {/* Shipping Options */}
                <div className="mb-16 animate-in slide-in-from-bottom-4 duration-700 delay-200">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Shipping Options
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {shippingOptions.map((option, index) => (
                            <div
                                key={option.name}
                                className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 hover:border-slate-600/50 hover:scale-105 transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10 text-center">
                                    <div className="text-4xl mb-4">{option.icon}</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {option.name}
                                    </h3>
                                    <div className="text-cyan-400 font-medium mb-2">
                                        {option.time}
                                    </div>
                                    <div className="text-violet-400 font-semibold mb-4">
                                        {option.cost}
                                    </div>
                                    <p className="text-slate-400 text-sm">
                                        {option.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Shipping Zones */}
                <div className="mb-16 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        International Shipping
                    </h2>
                    <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5" />

                        <div className="relative z-10 overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-700/50">
                                        <th className="text-left py-4 px-6 text-white font-semibold">Region</th>
                                        <th className="text-left py-4 px-6 text-white font-semibold">Delivery Time</th>
                                        <th className="text-left py-4 px-6 text-white font-semibold">Free Shipping</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shippingZones.map((zone, index) => (
                                        <tr
                                            key={zone.region}
                                            className="border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors duration-300"
                                        >
                                            <td className="py-4 px-6 text-slate-300 font-medium">
                                                {zone.region}
                                            </td>
                                            <td className="py-4 px-6 text-cyan-400">
                                                {zone.time}
                                            </td>
                                            <td className="py-4 px-6 text-violet-400">
                                                {zone.cost}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 animate-in slide-in-from-bottom-4 duration-700 delay-400">
                    {/* Order Processing */}
                    <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="mr-3">⏱️</span>
                                Order Processing
                            </h3>
                            <div className="space-y-4 text-slate-400">
                                <p>• Orders placed before 2 PM EST ship the same day</p>
                                <p>• Weekend orders are processed on Monday</p>
                                <p>• Processing time: 1-2 business days</p>
                                <p>• You'll receive tracking info via email</p>
                            </div>
                        </div>
                    </div>

                    {/* Packaging */}
                    <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-2xl" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="mr-3">📦</span>
                                Packaging
                            </h3>
                            <div className="space-y-4 text-slate-400">
                                <p>• Eco-friendly packaging materials</p>
                                <p>• Secure packaging for fragile items</p>
                                <p>• Discreet packaging available</p>
                                <p>• Gift wrapping service available</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="text-center animate-in slide-in-from-bottom-4 duration-700 delay-500">
                    <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-cyan-500/10 max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-8">
                                Shipping FAQ
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                                        Can I change my shipping address?
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Yes, you can change your shipping address within 1 hour of placing your order by contacting our support team.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                                        Do you ship to PO boxes?
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        We ship to PO boxes for standard shipping only. Express and overnight shipping require a physical address.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                                        What if my package is lost?
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        All orders include tracking and insurance. If your package is lost, we'll send a replacement at no cost.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                                        Can I track my order?
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Yes! You'll receive a tracking number via email once your order ships. Track your package in real-time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}