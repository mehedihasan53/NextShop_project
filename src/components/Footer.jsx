import Link from 'next/link';

export default function Footer() {

    const currentYear = new Date().getFullYear();

    // Navigation links configuration
    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/items', label: 'Items' },
        { href: '/login', label: 'Login' },
        { href: '/add-item', label: 'Add Item' },
    ];

    const supportLinks = [
        { href: '/help', label: 'Help Center' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
    ];

    const socialLinks = [
        {
            href: 'https://github.com',
            label: 'GitHub',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        },
        {
            href: 'https://linkedin.com',
            label: 'LinkedIn',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            href: 'https://twitter.com',
            label: 'Twitter',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="relative mt-20 overflow-hidden">
            {/* Top gradient glow border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="relative bg-slate-900/80 backdrop-blur-xl border-t border-slate-700/30">
                {/* Gradient overlay for premium effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />

                {/* Subtle glow effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent" />
                <div className="absolute top-0 left-1/4 right-1/4 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    {/* Main footer content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            {/* Logo */}
                            <div className="flex items-center space-x-3 mb-6 group">
                                <div className="relative">
                                    {/* Logo glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

                                    {/* Logo icon */}
                                    <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-lg">N</span>
                                    </div>
                                </div>

                                <span className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                                    NextShop
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                                A modern e-commerce demonstration built with Next.js and Express.
                                Showcasing premium UI design, authentication flows, and responsive layouts.
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group relative p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 
                                            text-slate-400 hover:text-white hover:border-slate-600/50
                                            hover:bg-slate-700/50 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20
                                            transition-all duration-300
                                        "
                                        aria-label={social.label}
                                    >
                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10">
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6 relative">
                                Quick Links
                                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="
                                                group relative text-slate-400 hover:text-white transition-all duration-300
                                                hover:translate-x-1
                                            "
                                        >
                                            {/* Hover underline animation */}
                                            <span className="relative">
                                                {link.label}
                                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full group-hover:w-full transition-all duration-300" />
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6 relative">
                                Support
                                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
                            </h3>
                            <ul className="space-y-3">
                                {supportLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="
                                                group relative text-slate-400 hover:text-white transition-all duration-300
                                                hover:translate-x-1
                                            "
                                        >
                                            {/* Hover underline animation */}
                                            <span className="relative">
                                                {link.label}
                                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full group-hover:w-full transition-all duration-300" />
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom section with gradient divider */}
                    <div className="relative mt-12 pt-8">
                        {/* Gradient divider */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />

                        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                            {/* Copyright */}
                            <p className="text-slate-400 text-sm">
                                © {currentYear} NextShop. Built with
                                <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"> Next.js</span> and
                                <span className="text-violet-400 hover:text-violet-300 transition-colors duration-300"> Express</span>.
                            </p>

                            {/* Additional info */}
                            <div className="flex items-center space-x-6 text-sm text-slate-400">
                                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                                    Made with ❤️ for developers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-16 bg-gradient-to-t from-cyan-500/10 to-transparent blur-2xl" />
        </footer>
    );
}
