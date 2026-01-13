import Image from 'next/image';

export async function generateMetadata({ params }) {
    const id = params.id;
    const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

    try {
        const res = await fetch(`${base}/api/items/${id}`);
        if (res.ok) {
            const item = await res.json();
            return {
                title: `${item.name} - NextShop`,
                description: item.description,
            };
        }
    } catch (error) {
        console.error('Error generating metadata:', error);
    }

    return {
        title: 'Item - NextShop',
        description: 'Product details',
    };
}

export default async function ItemPage({ params }) {
    const id = params.id;
    const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    const res = await fetch(`${base}/api/items/${id}`);
    if (!res.ok) {
        return <div className="container py-12">Item not found.</div>;
    }
    const item = await res.json();

    return (
        <div className="container py-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                    <Image src={item.image} alt={item.name} width={800} height={600} className="w-full rounded shadow" />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">{item.name}</h1>
                    <p className="mt-4 text-gray-700">{item.description}</p>
                    <div className="mt-6 text-2xl font-bold text-indigo-600">${item.price}</div>
                </div>
            </div>
        </div>
    );
}
