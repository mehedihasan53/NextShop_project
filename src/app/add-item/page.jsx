"use client";

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function AddItem() {
    const [form, setForm] = useState({ name: '', description: '', price: '', image: '' });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.description.trim()) newErrors.description = 'Description is required';
        if (!form.price || isNaN(form.price) || Number(form.price) <= 0) {
            newErrors.price = 'Valid price is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const res = await fetch('/api/proxy/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                const data = await res.json();
                toast.error(data.error || 'Failed to add item');
                setLoading(false);
                return;
            }
            toast.success('Item added successfully');
            router.push('/items');
        } catch (err) {
            toast.error('Network error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-12">
            <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold">Add New Item</h2>
                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                    <div>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className={`border p-2 rounded w-full ${errors.name ? 'border-red-500' : ''}`}
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Description"
                            className={`border p-2 rounded w-full ${errors.description ? 'border-red-500' : ''}`}
                            required
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                    </div>
                    <div>
                        <input
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            placeholder="Price"
                            type="number"
                            step="0.01"
                            min="0"
                            className={`border p-2 rounded w-full ${errors.price ? 'border-red-500' : ''}`}
                            required
                        />
                        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                    </div>
                    <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL (optional)" className="border p-2 rounded w-full" />
                    <button className="mt-2 rounded bg-green-600 px-4 py-2 text-white disabled:bg-gray-400" disabled={loading}>
                        {loading ? 'Adding...' : 'Add Item'}
                    </button>
                </form>
            </div>
        </div>
    );
}
