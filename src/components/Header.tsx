import Link from 'next/link';
import Image from 'next/image';
import data from '@/config/data.json';

const Navbar = () => {
  const { menuItems, siteDetails } = data;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
            <Link href="/">
                <a className="text-2xl font-bold">
                    {siteDetails.siteName}
                </a>
            </Link>
            <nav className="hidden md:flex gap-8">
                {menuItems.map((item) => (
                    <Link key={item.text} href={item.url}>
                        <a className="text-gray-600 hover:text-blue-600 transition-colors">{item.text}</a>
                    </Link>
                ))}
            </nav>
            <button className="hidden md:block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
            </button>
            {/* Tambahkan tombol menu mobile jika perlu */}
        </div>
    </header>
  );
};

export default Navbar;
