'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="container py-12 text-center">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Something went wrong!</h2>
            <p className="text-gray-600 mb-6">We encountered an error while loading this page.</p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
                Try again
            </button>
        </div>
    );
}