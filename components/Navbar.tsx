'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Curriculum', href: '/curriculum' },
    { name: 'Demographics', href: '/demographics' },
    { name: 'School', href: '/school' },
    { name: 'Co-op', href: '/coop' },
    { name: 'Lifestyle', href: '/lifestyle' },
    { name: 'Mental Health', href: '/mental-health' },
    { name: 'Relationships', href: '/relationships' },
    { name: 'Personal Dev', href: '/personal-development' },
    { name: 'Future Plans', href: '/future-plans' },
    { name: 'Advice', href: '/advice' },
    { name: 'Photos', href: '/photos' },
  ];

  return (
    <>
      {/* Mobile navbar */}
      <div className="md:hidden">
        <nav className="bg-gradient-to-r from-amber-900/90 via-gray-600/90 to-yellow-600/90 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-50">
          <div className="px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center text-2xl font-bold text-white">
                <Image src="/t25.svg" alt="tron 25' Logo" width={50} height={50} className="inline-block mr-2" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                  <div className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} bg-gradient-to-r from-amber-900/95 via-gray-600/95 to-yellow-600/95 backdrop-blur-sm`}>
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-white/20 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        {/* Spacer for mobile */}
        <div className="h-16"></div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <nav className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-amber-900/90 via-gray-700/90 to-yellow-700/90 backdrop-blur-sm shadow-xl z-50 overflow-y-auto">
          <div className="p-6">
            <Link href="/" className="flex items-center text-3xl font-bold text-white mb-8">
              <Image src="/t25.svg" alt="tron 25' Logo" width={50} height={50} className="inline-block mr-3" />
            </Link>
            
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-white/20 text-white shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10 hover:shadow-sm'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        {/* Spacer for desktop */}
        <div className="w-64"></div>
      </div>
    </>
  );
};

export default Navbar;