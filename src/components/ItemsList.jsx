"use client";

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function ItemsList() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
        fetch(`${base}/api/items`)
            .then((r) => r.json())
            .then((data) => {
                if (mounted) setItems(data);
            })
            .catch((err) => {
                if (mounted) setError('Failed to load items. Please try again.');
            })
            .finally(() => mounted && setLoading(false));
        return () => (mounted = false);
    }, []);

    if (loading) return <div className="container py-12">Loading items…</div>;
    if (error) return <div className="container py-12 text-red-600">{error}</div>;
    if (!items || items.length === 0) return <div className="container py-12">No items found.</div>;

    return (
        <div className="container py-12">
            <div className="grid md:grid-cols-3 gap-6">
                {items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
