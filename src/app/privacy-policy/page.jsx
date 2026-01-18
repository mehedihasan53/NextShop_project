"use client";

export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: 'Information We Collect',
            content: [
                'Personal information you provide when creating an account or making a purchase',
                'Payment information processed securely through our payment partners',
                'Device and usage information to improve our services',
                'Cookies and similar technologies for website functionality'
            ]
        },
        {
            title: 'How We Use Your Information',
            content: [
                'Process and fulfill your orders',
                'Provide customer support and respond to inquiries',
                'Send important updates about your orders and account',
                'Improve our products and services based on usage patterns'
            ]
        },
        {
            title: 'Information Sharing',
            content: [
                'We never sell your personal information to third parties',
                'Shipping partners receive necessary delivery information only',
                'Payment processors handle transaction data securely',
                'Legal compliance when required by law enforcement'
            ]
        },
        {
            title: 'Data Security',
            content: [
                'Industry-standard encryption for all sensitive data',
                'Regular security audits and vulnerability assessments',
                'Secure data centers with 24/7 monitoring',
                'Employee access controls and privacy training'
            ]
        },
        {
            title: 'Your Rights',
            content: [
                'Access and review your personal information',
                'Request corrections to inaccurate data',
                'Delete your account and associated data',
                'Opt-out of marketing communications at any time'
            ]
        },
        {
            title: 'Cookies & Tracking',
            content: [
                'Essential cookies for website functionality',
                'Analytics cookies to understand user behavior',
                'Marketing cookies for personalized experiences',
                'You can manage cookie preferences in your browser'
            ]
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
                        Privacy Policy
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-4">
                        Your privacy is important to us. Learn how we collect, use, and protect your information.
                    </p>
                    <p className="text-sm text-slate-500">
                        Last updated: January 2024
                    </p>
                </div>

                {/* Introduction */}
                <div className="mb-16 animate-in slide-in-from-bottom-4 duration-700 delay-200">
                    <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl" />

                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="mr-3">🛡️</span>
                                Our Commitment to Privacy
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                At NextShop, we are committed to protecting your privacy and ensuring the security of your personal information.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                                website or make a purchase from us. We encourage you to read this policy carefully to understand our practices
                                regarding your personal data.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Privacy Sections */}
                <div className="space-y-8 mb-16">
                    {sections.map((section, index) => (
                        <div
                            key={section.title}
                            className="animate-in slide-in-from-bottom-4 duration-700"
                            style={{ animationDelay: `${(index + 3) * 100}ms` }}
                        >
                            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group">
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mr-4" />
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {section.content.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start text-slate-400">
                                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Data Retention */}
                <div className="mb-16 animate-in slide-in-from-bottom-4 duration-700 delay-900">
                    <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 lg:p-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-2xl" />

                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="mr-3">⏰</span>
                                Data Retention
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-300 mb-4">Account Information</h4>
                                    <p className="text-slate-400 text-sm mb-4">
                                        We retain your account information for as long as your account is active or as needed to provide services.
                                    </p>
                                    <p className="text-slate-400 text-sm">
                                        You can request account deletion at any time through your account settings or by contacting support.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-violet-300 mb-4">Transaction Data</h4>
                                    <p className="text-slate-400 text-sm mb-4">
                                        Order and payment information is retained for 7 years for tax and legal compliance purposes.
                                    </p>
                                    <p className="text-slate-400 text-sm">
                                        Personal identifiers are anonymized after the required retention period.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="text-center animate-in slide-in-from-bottom-4 duration-700 delay-1000">
                    <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-cyan-500/10 max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Questions About Privacy?
                            </h2>
                            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                                If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:privacy@nextshop.com"
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                                >
                                    Email Privacy Team
                                </a>
                                <button className="px-8 py-4 bg-slate-700/50 border border-slate-600/50 text-slate-300 font-semibold rounded-xl backdrop-blur-sm hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white hover:scale-105 transition-all duration-300">
                                    Download Policy (PDF)
                                </button>
                            </div>

                            {/* Last Updated */}
                            <div className="mt-8 pt-8 border-t border-slate-700/50">
                                <p className="text-slate-500 text-sm">
                                    This Privacy Policy was last updated on January 15, 2024. We may update this policy from time to time,
                                    and we will notify you of any material changes via email or through our website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}