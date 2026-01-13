export default function Footer() {
    return (
        <footer className="border-t border-gray-200 mt-16 bg-white">
            <div className="container py-8 text-center text-sm text-gray-600">
                <p>© {new Date().getFullYear()} NextShop. Built with Next.js and Express.</p>
            </div>
        </footer>
    );
}
