"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function Home() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [openFAQ, setOpenFAQ] = useState(null);
    const [isVisible, setIsVisible] = useState({});

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe all sections
        const sections = document.querySelectorAll('[data-animate]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % 3); // Fixed: use hardcoded length
        }, 5000);
        return () => clearInterval(interval);
    }, []); // Fixed: removed dependency

    // E-commerce focused data
    const features = [
        {
            icon: "🚚",
            title: "Fast Shipping",
            description: "Free delivery on orders over $50. Express shipping available nationwide with tracking."
        },
        {
            icon: "🔒",
            title: "Secure Payment",
            description: "Multiple payment options including cards, digital wallets, and cash on delivery."
        },
        {
            icon: "⭐",
            title: "Quality Products",
            description: "Carefully curated smart gadgets and lifestyle products from trusted brands."
        },
        {
            icon: "🎧",
            title: "24/7 Support",
            description: "Round-the-clock customer service to help with orders, returns, and product queries."
        },
        {
            icon: "🔄",
            title: "Easy Returns",
            description: "Hassle-free 30-day return policy with free pickup for defective items."
        },
        {
            icon: "🏆",
            title: "Best Prices",
            description: "Competitive pricing with regular deals, discounts, and combo offers."
        }
    ];

    const services = [
        {
            title: "Smart Home Setup",
            description: "Professional installation and configuration of smart home devices for seamless automation",
            icon: "🏠",
            features: ["Device Installation", "Network Setup", "App Configuration", "User Training"]
        },
        {
            title: "Fitness Solutions",
            description: "Complete fitness tracking setup with personalized recommendations and goal setting",
            icon: "💪",
            features: ["Device Pairing", "Health Monitoring", "Workout Plans", "Progress Tracking"]
        },
        {
            title: "Office Organization",
            description: "Transform your workspace with smart organizers and productivity-enhancing gadgets",
            icon: "📋",
            features: ["Space Planning", "Product Selection", "Setup Service", "Maintenance Tips"]
        },
        {
            title: "Tech Consultation",
            description: "Expert advice on choosing the right smart gadgets for your lifestyle and needs",
            icon: "💡",
            features: ["Product Comparison", "Budget Planning", "Compatibility Check", "Future Upgrades"]
        }
    ];

    const testimonials = [
        {
            name: "Alex Thompson",
            role: "Smart Home Enthusiast",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            content: "The robot vacuum I bought has been a game-changer! It keeps my home spotless while I focus on work. The setup was incredibly easy and customer service was fantastic.",
            product: "Robot Vacuum Cleaner"
        },
        {
            name: "Maria Rodriguez",
            role: "Fitness Coach",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            content: "My fitness tracker from NextShop has helped me and my clients achieve better results. The accuracy is impressive and the app integration is seamless.",
            product: "Fitness Tracker"
        },
        {
            name: "David Kim",
            role: "Remote Worker",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            content: "The smart plugs and desk organizer have transformed my home office. Everything arrived quickly and works perfectly. Highly recommend for anyone working from home!",
            product: "Smart Office Setup"
        }
    ];

    const deals = [
        {
            name: "Smart Home Starter",
            originalPrice: "$299",
            salePrice: "$199",
            discount: "33% OFF",
            description: "Perfect bundle for smart home beginners",
            features: [
                "2x Smart Plugs",
                "1x Smart Bulb Set",
                "1x Motion Sensor",
                "Free Setup Guide"
            ],
            popular: false,
            badge: "Best Value"
        },
        {
            name: "Fitness Pro Bundle",
            originalPrice: "$249",
            salePrice: "$179",
            discount: "28% OFF",
            description: "Complete fitness tracking solution",
            features: [
                "Premium Fitness Tracker",
                "Smart Scale",
                "Workout Mat",
                "3-Month App Premium"
            ],
            popular: true,
            badge: "Most Popular"
        },
        {
            name: "Office Productivity",
            originalPrice: "$189",
            salePrice: "$139",
            discount: "26% OFF",
            description: "Boost your workspace efficiency",
            features: [
                "Desk Organizer Set",
                "Wireless Charger",
                "LED Desk Lamp",
                "Cable Management Kit"
            ],
            popular: false,
            badge: "Limited Time"
        }
    ];

    const faqs = [
        {
            question: "How long does delivery take?",
            answer: "Standard delivery takes 3-5 business days. Express delivery (1-2 days) is available for most products. We provide tracking information for all orders."
        },
        {
            question: "Is Cash on Delivery (COD) available?",
            answer: "Yes! We offer COD for orders up to $500. You can pay in cash when your order arrives. COD charges may apply for some locations."
        },
        {
            question: "Can I return products if I'm not satisfied?",
            answer: "Absolutely! We have a 30-day return policy. Items must be in original condition with packaging. We provide free return pickup for defective products."
        },
        {
            question: "Do you provide warranty on products?",
            answer: "Yes, all products come with manufacturer warranty. Additionally, we provide 1-year extended warranty on electronics and 6-month warranty on accessories."
        },
        {
            question: "Are the products genuine and authentic?",
            answer: "All our products are 100% genuine and sourced directly from authorized distributors. We guarantee authenticity and provide certificates when required."
        },
        {
            question: "Do you offer installation services?",
            answer: "Yes! We provide professional installation services for smart home devices, fitness equipment setup, and office organization. Service charges may apply based on location."
        }
    ];

    return (
        <div className="bg-slate-900 text-slate-100 min-h-screen overflow-hidden">

            {/* 1. HERO SECTION */}
            <section
                id="hero"
                data-animate
                className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-slate-800/5 opacity-40" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }} />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Main Headline */}
                    <div className="mb-8 animate-in slide-in-from-bottom-8 duration-1000">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent leading-tight">
                            Upgrade Your Life<br />
                            <span className="text-3xl sm:text-4xl lg:text-6xl">with Smart Gadgets</span>
                        </h1>
                        <div className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-300 mb-4">
                            Modern Technology for Modern Living
                        </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Discover premium smart home devices, fitness trackers, office organizers, and lifestyle gadgets.
                        Fast delivery, quality products, and unbeatable prices.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-8 duration-1000 delay-400">
                        <Link
                            href="/items"
                            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-2xl shadow-cyan-500/30 hover:shadow-3xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 overflow-hidden min-w-[200px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                <span>Shop Now</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 0 002 2h8a2 2 0 002-2v-4m-8 2h4" />
                                </svg>
                            </span>
                        </Link>

                        <Link
                            href="/items"
                            className="group relative px-8 py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 text-slate-300 font-semibold rounded-xl hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-white hover:scale-105 transition-all duration-300 min-w-[200px]"
                        >
                            <span className="flex items-center justify-center space-x-2">
                                <span>Explore Products</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </Link>
                    </div>


                </div>
            </section>

            {/* 2. ABOUT SECTION */}
            <section
                id="about"
                data-animate
                className={`relative py-20 lg:py-32 overflow-hidden transition-all duration-1000 ease-out ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900/80 to-slate-800/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />

                {/* Floating Orbs */}
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                                    About NextShop
                                </h2>
                                <p className="text-lg lg:text-xl text-slate-400 leading-relaxed mb-6">
                                    We're passionate about bringing cutting-edge technology to your everyday life.
                                    Since 2020, NextShop has been your trusted partner in smart living solutions.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    From smart home automation to fitness tracking and office productivity,
                                    we curate only the best products that enhance your lifestyle and simplify your daily routines.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div>
                                    <div className="text-sm text-slate-400">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-violet-400 mb-2">1000+</div>
                                    <div className="text-sm text-slate-400">Products</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
                                    <div className="text-sm text-slate-400">Satisfaction</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Element */}
                        <div className="relative">
                            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />
                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                                            <span className="text-white font-bold text-xl">N</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                                            <p className="text-slate-400">Making technology accessible</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">
                                        "To empower everyone with smart technology that enhances productivity,
                                        health, and happiness while maintaining simplicity and affordability."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FEATURES SECTION */}
            <section
                id="features"
                data-animate
                className={`relative py-20 lg:py-32 overflow-hidden transition-all duration-1000 ease-out ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent" />

                {/* Floating Orbs */}
                <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                            Why Choose NextShop?
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
                            Experience the difference with our premium service and quality products
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 hover:border-slate-600/50 hover:scale-105 transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10 text-center">
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SERVICES SECTION */}
            <section
                id="services"
                data-animate
                className={`relative py-20 lg:py-32 overflow-hidden transition-all duration-1000 ease-out ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900/80 to-slate-800/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />

                {/* Floating Orbs */}
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                            Our Services
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
                            Professional setup and support services to get the most out of your smart devices
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 hover:border-slate-600/50 hover:scale-105 transition-all duration-300"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="text-4xl">{service.icon}</div>
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                                                <span className="text-sm text-slate-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TESTIMONIALS SECTION */}
            <section
                id="testimonials"
                data-animate
                className={`relative py-20 lg:py-32 overflow-hidden transition-all duration-1000 ease-out ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />

                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                            What Our Customers Say
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
                            Real experiences from real customers who love their smart gadgets
                        </p>
                    </div>

                    {/* Testimonials Carousel */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />

                            <div className="relative z-10">
                                {/* Active Testimonial */}
                                <div className="text-center">
                                    <div className="mb-8">
                                        <img
                                            src={testimonials[activeTestimonial].avatar}
                                            alt={testimonials[activeTestimonial].name}
                                            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-cyan-400/50 shadow-lg"
                                        />
                                        <h4 className="text-xl font-semibold text-white mb-1">
                                            {testimonials[activeTestimonial].name}
                                        </h4>
                                        <p className="text-slate-400 text-sm mb-2">
                                            {testimonials[activeTestimonial].role}
                                        </p>
                                        <div className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-xs">
                                            {testimonials[activeTestimonial].product}
                                        </div>
                                    </div>

                                    <blockquote className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 italic">
                                        "{testimonials[activeTestimonial].content}"
                                    </blockquote>

                                    {/* Rating Stars */}
                                    <div className="flex justify-center space-x-1 mb-8">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial Indicators */}
                                <div className="flex justify-center space-x-3">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial
                                                ? 'bg-cyan-400 scale-125'
                                                : 'bg-slate-600 hover:bg-slate-500'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 6. PRICING SECTION */}
            <section
                id="pricing"
                data-animate
                className={`relative py-20 lg:py-32 overflow-hidden transition-all duration-1000 ease-out ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900/80 to-slate-800/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent" />

                {/* Floating Orbs */}
                <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                            Special Deals & Bundles
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
                            Save big with our carefully curated product bundles designed for every lifestyle
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {deals.map((deal, index) => (
                            <div
                                key={deal.name}
                                className={`group relative bg-slate-800/40 backdrop-blur-xl border rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${deal.popular
                                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
                                    : 'border-slate-700/50 hover:border-slate-600/50'
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Popular Badge */}
                                {deal.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                                            {deal.badge}
                                        </div>
                                    </div>
                                )}

                                {/* Background Glow */}
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${deal.popular
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10'
                                    : 'bg-gradient-to-r from-cyan-500/5 to-violet-500/5'
                                    }`} />

                                <div className="relative z-10">
                                    {/* Badge */}
                                    {!deal.popular && (
                                        <div className="inline-block px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-medium mb-4">
                                            {deal.badge}
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                                        {deal.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors duration-300">
                                        {deal.description}
                                    </p>

                                    {/* Pricing */}
                                    <div className="flex items-center space-x-3 mb-6">
                                        <span className="text-3xl font-bold text-cyan-400">{deal.salePrice}</span>
                                        <span className="text-lg text-slate-500 line-through">{deal.originalPrice}</span>
                                        <span className="px-2 py-1 bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium rounded">
                                            {deal.discount}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8">
                                        {deal.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center space-x-3">
                                                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-slate-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Link
                                        href="/items"
                                        className={`block w-full text-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${deal.popular
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105'
                                            : 'bg-slate-700/50 border border-slate-600/50 text-slate-300 hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white hover:scale-105'
                                            }`}
                                    >
                                        Get This Bundle
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section
                id="faq"
                data-animate
                className={`relative py-20 lg:py-32 overflow-hidden transition-all duration-1000 ease-out ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />

                {/* Floating Orbs */}
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
                            Got questions? We've got answers. Find everything you need to know about our products and services.
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60" />

                                <div className="relative z-10">
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/20 transition-colors duration-300"
                                    >
                                        <h3 className="text-lg font-semibold text-white pr-4">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            {openFAQ === index ? (
                                                <ChevronUpIcon className="w-6 h-6 text-cyan-400" />
                                            ) : (
                                                <ChevronDownIcon className="w-6 h-6 text-slate-400" />
                                            )}
                                        </div>
                                    </button>

                                    {openFAQ === index && (
                                        <div className="px-8 pb-6">
                                            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent mb-4" />
                                            <p className="text-slate-400 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center mt-16">
                        <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-cyan-500/10 max-w-2xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-3xl" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Still Have Questions?
                                </h3>
                                <p className="text-slate-400 mb-8">
                                    Our customer support team is here to help you 24/7. Get personalized assistance for all your smart gadget needs.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                                    >
                                        <span>Contact Us</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="tel:+1234567890"
                                        className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 text-slate-300 font-semibold rounded-xl hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-white hover:scale-105 transition-all duration-300"
                                    >
                                        <span>Call Now</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}