import ItemsList from '../../components/ItemsList';

export const metadata = {
    title: "Items - NextShop",
    description: "Browse our collection of modern products",
};

export default function ItemsPage() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />
                <div className="absolute top-0 left-1/4 right-1/4 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="text-center">
                        <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent mb-4">
                            Our Products
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                            Discover our curated collection of modern, high-quality products designed for the contemporary lifestyle.
                        </p>
                    </div>
                </div>
            </div>

            {/* Items List */}
            <ItemsList />
        </div>
    );
}
