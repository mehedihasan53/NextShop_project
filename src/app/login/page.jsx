"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    // Demo credentials
    const DEMO_EMAIL = "admin@gmail.com";
    const DEMO_PASSWORD = "123456";

    // Auto-fill demo credentials
    const handleDemoCredentials = () => {
        setEmail(DEMO_EMAIL);
        setPassword(DEMO_PASSWORD);
        setError(""); // Clear any existing errors
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Call Next.js auth route to set cookie on this domain
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.error || "Login failed");
                setLoading(false);
                return;
            }

            // Optional: call Express login to sync their cookie (best-effort)
            try {
                const expressUrl =
                    process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
                await fetch(`${expressUrl}/api/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ email, password }),
                });
            } catch (e) {
                // Silent fail for Express sync
            }

            // Set a client-visible cookie for UI state
            Cookies.set("auth", "true");
            router.push("/items");
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

            {/* Animated Background Shapes */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-md mx-4">
                {/* Login Container with Glassmorphism */}
                <div
                    className="
                    relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 
                    rounded-2xl shadow-2xl shadow-cyan-500/10 p-8 lg:p-10
                    hover:shadow-cyan-500/20 transition-all duration-500
                "
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 rounded-2xl" />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent rounded-2xl" />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            {/* Logo */}
                            <div className="flex justify-center mb-6">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                                    <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-xl">N</span>
                                    </div>
                                </div>
                            </div>

                            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent mb-2">
                                Welcome Back
                            </h1>
                            <p className="text-slate-400">Sign in to your admin account</p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-slate-300"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="
                                            w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg
                                            text-white placeholder-slate-400 backdrop-blur-sm
                                            focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50
                                            hover:border-slate-500/50 transition-all duration-300
                                        "
                                    />
                                    {/* Email Icon */}
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-slate-300"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        required
                                        className="
                                            w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg
                                            text-white placeholder-slate-400 backdrop-blur-sm
                                            focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50
                                            hover:border-slate-500/50 transition-all duration-300
                                        "
                                    />
                                    {/* Password Toggle Button */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
                                    >
                                        {showPassword ? (
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div
                                    className="
                                    p-3 bg-red-500/20 border border-red-500/30 rounded-lg 
                                    text-red-300 text-sm backdrop-blur-sm
                                    animate-in slide-in-from-top-2 duration-300
                                "
                                >
                                    <div className="flex items-center space-x-2">
                                        <svg
                                            className="w-4 h-4 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>{error}</span>
                                    </div>
                                </div>
                            )}

                            {/* Demo Credentials Button */}
                            <button
                                type="button"
                                onClick={handleDemoCredentials}
                                className="
                                    w-full px-4 py-3 bg-violet-500/20 border border-violet-500/30 
                                    text-violet-300 font-medium rounded-lg backdrop-blur-sm
                                    hover:bg-violet-500/30 hover:border-violet-400/50 hover:text-violet-200
                                    hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20
                                    transition-all duration-300 group
                                "
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    <svg
                                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                    <span>Use Demo Credentials</span>
                                </div>
                            </button>

                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 
                                    text-white font-medium rounded-lg shadow-lg shadow-cyan-500/30
                                    hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105
                                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                                    transition-all duration-300 group
                                "
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Signing In...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>Sign In</span>
                                        <svg
                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        </form>


                    </div>
                </div>

                {/* Footer Link */}
                <div className="text-center mt-6">
                    <p className="text-slate-400 text-sm">
                        New to NextShop?
                        <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer ml-1">
                            Explore as guest
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
