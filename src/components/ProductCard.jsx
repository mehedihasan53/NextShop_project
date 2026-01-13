import Link from 'next/link';

export default function ProductCard({ item }) {
    return (
        <div className="rounded-lg border bg-white p-4 shadow-sm">
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover rounded" />
            <div className="mt-3">
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <div className="mt-3 flex items-center justify-between">
                    <div className="text-indigo-600 font-semibold">${item.price}</div>
                    <Link href={`/items/${item.id}`} className="text-sm text-gray-700">View</Link>
                </div>
            </div>
        </div>
    );
}
