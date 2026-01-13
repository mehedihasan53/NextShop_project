import ItemsList from '../../components/ItemsList';

export const metadata = {
    title: "Items - NextShop",
    description: "Browse our collection of modern products",
};

export default function ItemsPage() {
    return (
        <div>
            <div className="container py-12">
                <h2 className="text-2xl font-semibold">Items</h2>
                <p className="text-gray-600 mt-2">Browse available products.</p>
            </div>
            <ItemsList />
        </div>
    );
}
