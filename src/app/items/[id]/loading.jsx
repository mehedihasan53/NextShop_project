export default function Loading() {
    return (
        <div className="container py-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-gray-200 animate-pulse h-64 w-full rounded"></div>
                <div>
                    <div className="bg-gray-200 animate-pulse h-8 w-3/4 rounded mb-4"></div>
                    <div className="bg-gray-200 animate-pulse h-4 w-full rounded mb-2"></div>
                    <div className="bg-gray-200 animate-pulse h-4 w-2/3 rounded mb-6"></div>
                    <div className="bg-gray-200 animate-pulse h-8 w-1/3 rounded"></div>
                </div>
            </div>
        </div>
    );
}