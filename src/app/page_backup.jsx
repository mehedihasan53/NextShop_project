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
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

      {/* 1. HERO SECTION - E-commerce Focus */}
      <section
        id="hero"
        data-animate
        className={`
          relative min-h-screen flex items-center justify-center overflow-hidden
          transition-all duration-1000 ease-out
          ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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

          {/* Product Categories Badge */}
          <div className="mt-12 animate-in slide-in-from-bottom-8 duration-1000 delay-600">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-full">
              <span className="text-slate-400 text-sm">Popular Categories:</span>
              <span className="text-cyan-400 text-sm font-medium">Smart Home</span>
              <span className="text-slate-600">•</span>
              <span className="text-violet-400 text-sm font-medium">Fitness</span>
              <span className="text-slate-600">•</span>
              <span className="text-blue-400 text-sm font-medium">Office</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION - Store Focus */}
      <section
        id="about"
        data-animate
        className={`
          relative py-20 lg:py-32 overflow-hidden
          transition-all duration-1000 ease-out delay-200
          ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="
                  text-3xl lg:text-5xl font-bold
                  bg-gradient-to-r from-white via-cyan-100 to-violet-300 
                  bg-clip-text text-transparent
                ">
                  Your Smart Shopping Destination
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
              </div>

              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                NextShop is your one-stop platform for smart home devices, fitness gear, and office organizers.
                We curate the latest technology to enhance your lifestyle with fast delivery, quality products, and the best prices.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast Delivery</h3>
                    <p className="text-slate-400">Express shipping nationwide with same-day delivery in major cities. Track your order in real-time.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
                    <p className="text-slate-400">Carefully selected products from trusted brands with quality assurance and authenticity guarantee.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Best Price Guarantee</h3>
                    <p className="text-slate-400">Competitive pricing with regular deals, combo offers, and price matching on identical products.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats & Visual Content */}
            <div className="relative">
              <div className="
                relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
                rounded-3xl p-8 shadow-2xl shadow-cyan-500/10
                hover:shadow-cyan-500/20 transition-all duration-500
              ">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />

                {/* Stats Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">50k+</div>
                    <div className="text-slate-400">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-violet-400 mb-2">1000+</div>
                    <div className="text-slate-400">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">24hrs</div>
                    <div className="text-slate-400">Fast Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">4.9★</div>
                    <div className="text-slate-400">Rating</div>
                  </div>
                </div>

                {/* Product Categories */}
                <div className="relative z-10 mt-8 pt-6 border-t border-slate-700/50">
                  <div className="text-center text-slate-400 text-sm mb-4">Popular Categories</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Smart Home</span>
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs">Fitness</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Office</span>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">Lifestyle</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION - Store Features */}
      <section
        id="features"
        data-animate
        className={`
          relative py-20 lg:py-32 overflow-hidden
          transition-all duration-1000 ease-out delay-300
          ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-slate-800/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="
              text-3xl lg:text-5xl font-bold mb-6
              bg-gradient-to-r from-white via-cyan-100 to-violet-300 
              bg-clip-text text-transparent
            ">
              Why Choose NextShop
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              Experience the best online shopping with our premium features and customer-first approach
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
                  rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10
                  hover:scale-105 hover:border-slate-600/50
                  transition-all duration-500 ease-out
                "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/20 via-transparent to-violet-500/20 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 px-8 py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300 text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-300 text-sm">Verified Store</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-slate-300 text-sm">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION - E-commerce Services */}
      <section
        id="services"
        data-animate
        className={`
          relative py-20 lg:py-32 overflow-hidden
          transition-all duration-1000 ease-out delay-400
          ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="
              text-3xl lg:text-5xl font-bold mb-6
              bg-gradient-to-r from-white via-cyan-100 to-violet-300 
              bg-clip-text text-transparent
            ">
              Our Services
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              Beyond products - we provide complete solutions for your smart lifestyle needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
                  rounded-2xl overflow-hidden shadow-xl
                  hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105 hover:border-slate-600/50
                  transition-all duration-500 ease-out
                "
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-8">
                  {/* Service Icon */}
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="
                    w-full px-6 py-3 bg-gradient-to-r from-slate-700/50 to-slate-600/50 
                    border border-slate-600/50 text-slate-300 font-medium rounded-lg
                    hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500/30 hover:text-cyan-300
                    transition-all duration-300
                  ">
                    Learn More
                  </button>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/20 via-transparent to-violet-500/20 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Service Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quick Setup</h4>
              <p className="text-slate-400 text-sm">Professional installation within 24-48 hours of delivery</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
              <p className="text-slate-400 text-sm">Certified technicians with 5+ years experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Satisfaction Guaranteed</h4>
              <p className="text-slate-400 text-sm">100% satisfaction or money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION - Customer Reviews */}
      <section
        id="testimonials"
        data-animate
        className={`
          relative py-20 lg:py-32 overflow-hidden
          transition-all duration-1000 ease-out delay-500
          ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-slate-800/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="
              text-3xl lg:text-5xl font-bold mb-6
              bg-gradient-to-r from-white via-cyan-100 to-violet-300 
              bg-clip-text text-transparent
            ">
              Happy Customers
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              Real stories from customers who transformed their lives with our smart products
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="
              relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
              rounded-3xl p-8 lg:p-12 shadow-2xl shadow-cyan-500/10
              min-h-[350px] flex items-center
            ">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-3xl" />

              <div className="relative z-10 w-full">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`
                      transition-all duration-500 ease-out
                      ${index === activeTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-8'}
                    `}
                  >
                    {/* Product Badge */}
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <span>{testimonial.product}</span>
                    </div>

                    {/* Quote Icon */}
                    <div className="text-6xl text-cyan-400/30 mb-6">
                      "
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8">
                      {testimonial.content}
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-cyan-500/30"
                      />
                      <div>
                        <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-slate-400">{testimonial.role}</div>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-slate-400 text-sm ml-2">5.0 out of 5</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${index === activeTestimonial
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-slate-600 hover:bg-slate-500'
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* Customer Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-2">50,000+</div>
              <div className="text-slate-400 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-violet-400 mb-2">4.9/5</div>
              <div className="text-slate-400 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-slate-400 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-2">15,000+</div>
              <div className="text-slate-400 text-sm">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEALS SECTION - Best Offers */}
      <section
        id="deals"
        data-animate
        className={`
          relative py-20 lg:py-32 overflow-hidden
          transition-all duration-1000 ease-out delay-600
          ${isVisible.deals ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="
              text-3xl lg:text-5xl font-bold mb-6
              bg-gradient-to-r from-white via-cyan-100 to-violet-300 
              bg-clip-text text-transparent
            ">
              Best Deals & Bundles
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              Save more with our exclusive combo offers and limited-time deals
            </p>
          </div>

          {/* Deals Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deals.map((deal, index) => (
              <div
                key={index}
                className={`
                  group relative rounded-3xl overflow-hidden shadow-xl
                  transition-all duration-500 ease-out hover:scale-105
                  ${deal.popular
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 shadow-cyan-500/20'
                    : 'bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50'
                  }
                `}
              >
                {/* Popular Badge */}
                {deal.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      {deal.badge}
                    </div>
                  </div>
                )}

                {/* Deal Badge */}
                {!deal.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-semibold rounded-full">
                      {deal.badge}
                    </div>
                  </div>
                )}

                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-8 lg:p-10">
                  {/* Discount Badge */}
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-bold mb-4">
                    {deal.discount}
                  </div>

                  {/* Deal Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">{deal.name}</h3>
                  <p className="text-slate-400 mb-6">{deal.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl lg:text-4xl font-bold text-white">{deal.salePrice}</span>
                      <span className="text-lg text-slate-400 line-through">{deal.originalPrice}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {deal.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
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
                    className={`
                      block w-full px-6 py-4 font-semibold rounded-xl transition-all duration-300 text-center
                      ${deal.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40'
                        : 'bg-slate-700/50 border border-slate-600/50 text-slate-300 hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white'
                      }
                    `}
                  >
                    Shop This Deal
                  </Link>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/20 via-transparent to-violet-500/20 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Deal Highlights */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 px-8 py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300 text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300 text-sm">30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300 text-sm">1-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION - E-commerce Questions */}
      <section
        id="faq"
        data-animate
        className={`
          relative py-20 lg:py-32 overflow-hidden
          transition-all duration-1000 ease-out delay-700
          ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-slate-800/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="
              text-3xl lg:text-5xl font-bold mb-6
              bg-gradient-to-r from-white via-cyan-100 to-violet-300 
              bg-clip-text text-transparent
            ">
              Frequently Asked Questions
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to know about shopping with NextShop
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
                  group bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
                  rounded-2xl overflow-hidden shadow-xl
                  hover:border-slate-600/50 transition-all duration-300
                "
              >
                {/* Question */}
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/20 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className={`
                    transform transition-transform duration-300 flex-shrink-0
                    ${openFAQ === index ? 'rotate-180' : ''}
                  `}>
                    <ChevronDownIcon className="w-6 h-6 text-slate-400" />
                  </div>
                </button>

                {/* Answer */}
                <div className={`
                  overflow-hidden transition-all duration-500 ease-out
                  ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent mb-4" />
                    <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <p className="text-slate-400 mb-6">Still have questions about our products or services?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="
                  inline-flex items-center space-x-2 px-8 py-4 
                  bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl
                  shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105
                  transition-all duration-300
                "
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Contact Support</span>
              </Link>

              <Link
                href="tel:+1234567890"
                className="
                  inline-flex items-center space-x-2 px-8 py-4 
                  bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 text-slate-300 font-semibold rounded-xl
                  hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-white hover:scale-105
                  transition-all duration-300
                "
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
