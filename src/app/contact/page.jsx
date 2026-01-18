"use client";

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

/**
 * ContactPage - Complete contact form with EmailJS integration
 * 
 * Features:
 * - Form validation with real-time error feedback
 * - EmailJS integration for sending emails
 * - Loading states and success/error handling
 * - Responsive design with glassmorphism effects
 * - Focus states and animations
 * - Hydration-safe mounting
 */
export default function ContactPage() {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [focusedField, setFocusedField] = useState('');

    // Handle mounting to prevent hydration issues
    useEffect(() => {
        setMounted(true);
    }, []);

    // Form validation
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setIsLoading(true);

        try {
            // EmailJS configuration from environment variables
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            // Send email using EmailJS
            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'mehedihasan.codes3@gmail.com'
                },
                publicKey
            );

            if (result.status === 200) {
                toast.success('🎉 Message sent successfully! I\'ll get back to you soon.');

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setFocusedField('');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error('Failed to send message. Please try again or contact me directly.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900" suppressHydrationWarning={true}>
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />
            <div className="absolute top-0 left-1/4 right-1/4 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

            {/* Floating Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
                {/* Page Header */}
                <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700">
                    <h1 className="
                        text-4xl lg:text-6xl font-bold mb-6
                        bg-gradient-to-r from-white via-cyan-100 to-violet-300 
                        bg-clip-text text-transparent
                    ">
                        Get In Touch
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                        Have a question or want to work together? I&apos;d love to hear from you.
                        Send me a message and I&apos;ll respond as soon as possible.
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Left Side - Contact Information */}
                        <div className="animate-in slide-in-from-left-4 duration-700 delay-200">
                            <div className="
                                relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
                                rounded-3xl p-8 lg:p-10 shadow-2xl shadow-cyan-500/10
                                hover:shadow-cyan-500/20 transition-all duration-500
                            ">
                                {/* Background gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />

                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-3xl" />

                                <div className="relative z-10">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                                        Contact Information
                                    </h2>
                                    <p className="text-slate-400 mb-8 leading-relaxed">
                                        Ready to start your next project or have questions about my services?
                                        Reach out through any of these channels.
                                    </p>

                                    {/* Contact Details */}
                                    <div className="space-y-6">
                                        {/* Email */}
                                        <div className="flex items-start space-x-4 group">
                                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                                <a
                                                    href="mailto:mehedihasan.codes3@gmail.com"
                                                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                                                >
                                                    mehedihasan.codes3@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-start space-x-4 group">
                                            <div className="w-12 h-12 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                                                <p className="text-slate-400">Savar,Dhaka</p>
                                            </div>
                                        </div>

                                        {/* Response Time */}
                                        <div className="flex items-start space-x-4 group">
                                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-1">Response Time</h3>
                                                <p className="text-slate-400">Usually within 24 hours</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="mt-10 pt-8 border-t border-slate-700/50">
                                        <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
                                        <div className="flex space-x-4">
                                            <a
                                                href="https://github.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    w-10 h-10 bg-slate-700/50 border border-slate-600/50 rounded-lg 
                                                    flex items-center justify-center text-slate-400
                                                    hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white hover:scale-110
                                                    transition-all duration-300
                                                "
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="https://linkedin.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    w-10 h-10 bg-slate-700/50 border border-slate-600/50 rounded-lg 
                                                    flex items-center justify-center text-slate-400
                                                    hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white hover:scale-110
                                                    transition-all duration-300
                                                "
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="https://twitter.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="
                                                    w-10 h-10 bg-slate-700/50 border border-slate-600/50 rounded-lg 
                                                    flex items-center justify-center text-slate-400
                                                    hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white hover:scale-110
                                                    transition-all duration-300
                                                "
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="animate-in slide-in-from-right-4 duration-700 delay-400">
                            <div className="
                                relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
                                rounded-3xl p-8 lg:p-10 shadow-2xl shadow-cyan-500/10
                                hover:shadow-cyan-500/20 transition-all duration-500
                            ">
                                {/* Background gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-3xl" />

                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 rounded-3xl" />

                                <div className="relative z-10">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                                        Send Message
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Field */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-300">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField('')}
                                                    placeholder="Enter your full name"
                                                    className={`
                                                        w-full px-4 py-3 rounded-xl border backdrop-blur-sm
                                                        bg-slate-700/30 text-white placeholder-slate-400
                                                        focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50
                                                        hover:bg-slate-700/40 transition-all duration-300
                                                        ${errors.name
                                                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                                                            : 'border-slate-600/50'
                                                        }
                                                        ${focusedField === 'name' ? 'scale-105' : ''}
                                                    `}
                                                    required
                                                />
                                                {focusedField === 'name' && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-xl blur-xl -z-10" />
                                                )}
                                            </div>
                                            {errors.name && (
                                                <p className="text-red-400 text-sm flex items-center space-x-1 animate-in slide-in-from-left-2 duration-300">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{errors.name}</span>
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-300">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField('')}
                                                    placeholder="Enter your email address"
                                                    className={`
                                                        w-full px-4 py-3 rounded-xl border backdrop-blur-sm
                                                        bg-slate-700/30 text-white placeholder-slate-400
                                                        focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50
                                                        hover:bg-slate-700/40 transition-all duration-300
                                                        ${errors.email
                                                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                                                            : 'border-slate-600/50'
                                                        }
                                                        ${focusedField === 'email' ? 'scale-105' : ''}
                                                    `}
                                                    required
                                                />
                                                {focusedField === 'email' && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-xl blur-xl -z-10" />
                                                )}
                                            </div>
                                            {errors.email && (
                                                <p className="text-red-400 text-sm flex items-center space-x-1 animate-in slide-in-from-left-2 duration-300">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{errors.email}</span>
                                                </p>
                                            )}
                                        </div>

                                        {/* Subject Field */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-300">
                                                Subject *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('subject')}
                                                    onBlur={() => setFocusedField('')}
                                                    placeholder="What's this about?"
                                                    className={`
                                                        w-full px-4 py-3 rounded-xl border backdrop-blur-sm
                                                        bg-slate-700/30 text-white placeholder-slate-400
                                                        focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50
                                                        hover:bg-slate-700/40 transition-all duration-300
                                                        ${errors.subject
                                                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                                                            : 'border-slate-600/50'
                                                        }
                                                        ${focusedField === 'subject' ? 'scale-105' : ''}
                                                    `}
                                                    required
                                                />
                                                {focusedField === 'subject' && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-xl blur-xl -z-10" />
                                                )}
                                            </div>
                                            {errors.subject && (
                                                <p className="text-red-400 text-sm flex items-center space-x-1 animate-in slide-in-from-left-2 duration-300">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{errors.subject}</span>
                                                </p>
                                            )}
                                        </div>

                                        {/* Message Field */}
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-slate-300">
                                                Message *
                                            </label>
                                            <div className="relative">
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('message')}
                                                    onBlur={() => setFocusedField('')}
                                                    placeholder="Tell me about your project or question..."
                                                    rows={5}
                                                    className={`
                                                        w-full px-4 py-3 rounded-xl border backdrop-blur-sm resize-none
                                                        bg-slate-700/30 text-white placeholder-slate-400
                                                        focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50
                                                        hover:bg-slate-700/40 transition-all duration-300
                                                        ${errors.message
                                                            ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                                                            : 'border-slate-600/50'
                                                        }
                                                        ${focusedField === 'message' ? 'scale-105' : ''}
                                                    `}
                                                    required
                                                />
                                                {focusedField === 'message' && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-xl blur-xl -z-10" />
                                                )}
                                            </div>
                                            {errors.message && (
                                                <p className="text-red-400 text-sm flex items-center space-x-1 animate-in slide-in-from-left-2 duration-300">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{errors.message}</span>
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="
                                                    w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 
                                                    text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30
                                                    hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105
                                                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                                                    transition-all duration-300 relative overflow-hidden group
                                                "
                                            >
                                                {/* Button glow effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                                                <div className="relative flex items-center justify-center space-x-2">
                                                    {isLoading ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            <span>Sending Message...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                            </svg>
                                                            <span>Send Message</span>
                                                        </>
                                                    )}
                                                </div>
                                            </button>
                                        </div>

                                        {/* Helper Text */}
                                        <div className="text-center pt-4">
                                            <p className="text-slate-400 text-sm">
                                                All fields marked with * are required. I&apos;ll get back to you within 24 hours.
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}