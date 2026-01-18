"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductNotFound from "../../../components/ProductNotFound";
import ProductError from "../../../components/ProductError";

export default function ItemPage({ params }) {
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [itemId, setItemId] = useState(null);

  // Handle mounting and params
  useEffect(() => {
    setMounted(true);
    // Handle params Promise in Next.js 16
    if (params) {
      Promise.resolve(params).then((resolvedParams) => {
        setItemId(resolvedParams.id);
      });
    }
  }, [params]);

  // Fetch item data
  useEffect(() => {
    if (!mounted || !itemId) return;

    const fetchItem = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log(`Fetching item ${itemId}`);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const res = await fetch(`/api/items/${itemId}`, {
          cache: "no-store",
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        clearTimeout(timeoutId);

        console.log(`Response status: ${res.status}`);

        if (res.ok) {
          const itemData = await res.json();
          console.log(`Item loaded:`, itemData);
          setItem(itemData);
        } else if (res.status === 404) {
          console.log(`Item ${itemId} not found`);
          setError('not_found');
        } else {
          setError(`Failed to load product details (Status: ${res.status})`);
        }
      } catch (err) {
        console.error("Error fetching item:", err);
        if (err.name === 'AbortError') {
          setError("Request timed out. Please try again.");
        } else {
          setError("Network error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [mounted, itemId]);

  // Show loading state during initial mount or data loading
  if (!mounted || loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Loading product details...</p>
        </div>
      </div>
    );
  }

  // Handle error states
  if (error === 'not_found') {
    return <ProductNotFound />;
  }

  if (error) {
    return <ProductError error={error} />;
  }

  // If no item found after loading
  if (!item) {
    return <ProductNotFound />;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />
      <div className="absolute top-0 left-1/4 right-1/4 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/items"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-white hover:scale-105 transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Items</span>
          </Link>
        </div>

        {/* Product Details Container */}
        <div className="relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden animate-in slide-in-from-bottom-4 duration-700">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60" />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-12">
            {/* Product Image Section */}
            <div className="space-y-6">
              <ProductImage item={item} />

              {/* Additional Product Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    ${item.price}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">Best Price</div>
                </div>

                <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">4.8 Rating</div>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="space-y-8">
              {/* Product Title & Description */}
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                  {item.name}
                </h1>

                <p className="text-lg text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Product Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Key Features
                </h3>
                <div className="grid gap-3">
                  {getProductFeatures(item).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Specifications */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Specifications
                </h3>
                <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                    <span className="text-slate-400">Product ID</span>
                    <span className="text-slate-200 font-mono">#{item.id}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                    <span className="text-slate-400">Category</span>
                    <span className="text-slate-200">
                      {getProductCategory(item.name)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-600/30">
                    <span className="text-slate-400">Availability</span>
                    <span className="text-green-400 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>In Stock</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400">Shipping</span>
                    <span className="text-slate-200">Free Delivery</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-2">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                      />
                    </svg>
                    <span>Add to Cart</span>
                  </div>
                </button>

                <button className="px-6 py-4 bg-slate-700/50 border border-slate-600/50 text-slate-300 font-semibold rounded-xl backdrop-blur-sm hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-2">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span>Save</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Product Image Component with Error Handling
function ProductImage({ item }) {
  return (
    <div className="relative group">
      <div
        className="
                relative aspect-square overflow-hidden rounded-2xl 
                bg-slate-700/50 border border-slate-600/30
            "
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          loading="eager"
        />

        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Image glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
}

// Helper function to generate product features based on name/description
function getProductFeatures(item) {
  const features = [];
  const name = item.name.toLowerCase();

  if (name.includes("earbuds") || name.includes("headphones")) {
    features.push(
      "Active Noise Cancellation",
      "Wireless Connectivity",
      "Long Battery Life",
      "Premium Sound Quality",
    );
  } else if (name.includes("pillow")) {
    features.push(
      "Memory Foam Construction",
      "Ergonomic Design",
      "Travel-Friendly Size",
      "Machine Washable Cover",
    );
  } else if (name.includes("vacuum") || name.includes("robot")) {
    features.push(
      "Smart Navigation",
      "Auto-Charging",
      "App Control",
      "Multi-Surface Cleaning",
    );
  } else if (name.includes("tracker") || name.includes("fitness")) {
    features.push(
      "Heart Rate Monitor",
      "Sleep Tracking",
      "Water Resistant",
      "Long Battery Life",
    );
  } else if (name.includes("projector")) {
    features.push(
      "HD Resolution",
      "Portable Design",
      "Multiple Connectivity",
      "Built-in Speakers",
    );
  } else if (name.includes("plug") || name.includes("smart")) {
    features.push(
      "Voice Control",
      "Remote Access",
      "Energy Monitoring",
      "Easy Setup",
    );
  } else if (name.includes("kettle")) {
    features.push(
      "Fast Boiling",
      "Auto Shut-off",
      "Temperature Control",
      "Stainless Steel",
    );
  } else if (name.includes("backpack")) {
    features.push(
      "Multiple Compartments",
      "Durable Material",
      "Comfortable Straps",
      "Water Resistant",
    );
  } else {
    features.push(
      "High Quality Materials",
      "Durable Construction",
      "Modern Design",
      "Great Value",
    );
  }

  return features;
}

// Helper function to determine product category
function getProductCategory(name) {
  const nameLower = name.toLowerCase();

  if (nameLower.includes("earbuds") || nameLower.includes("headphones"))
    return "Audio & Electronics";
  if (nameLower.includes("pillow")) return "Home & Comfort";
  if (nameLower.includes("vacuum") || nameLower.includes("robot"))
    return "Home Appliances";
  if (nameLower.includes("tracker") || nameLower.includes("fitness"))
    return "Health & Fitness";
  if (nameLower.includes("projector")) return "Electronics";
  if (nameLower.includes("plug") || nameLower.includes("smart"))
    return "Smart Home";
  if (nameLower.includes("kettle")) return "Kitchen Appliances";
  if (nameLower.includes("backpack")) return "Bags & Accessories";
  if (nameLower.includes("organizer")) return "Office & Organization";
  if (nameLower.includes("cream") || nameLower.includes("beauty"))
    return "Beauty & Personal Care";

  return "General";
}
