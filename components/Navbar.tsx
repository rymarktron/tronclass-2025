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
    { name: 'Demographics', href: '/demographics' },
    { name: 'School', href: '/school' },
    { name: 'Co-op', href: '/coop' },
    { name: 'Lifestyle', href: '/lifestyle' },
    { name: 'Mental Health', href: '/mental-health' },
    { name: 'Future Plans', href: '/future-plans' },
    { name: 'Contributors', href: '/contributors' },
    { name: 'Photos', href: '/photos' },
  ];

  return (
    <>
      {/* Mobile navbar */}
      <div className="md:hidden">
        <nav className="bg-zinc-500 fixed top-0 left-0 right-0 z-50">
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
          <div className={`${isOpen ? 'block' : 'hidden'} bg-zinc-500`}>
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

      {/* Desktop navbar - left side, vertically centered, no background */}
      <div className="hidden md:block">
        <nav className="fixed left-0 top-0 h-screen bg-transparent z-50 flex items-center">
          <div className="pl-8">
            <div className="flex flex-col items-center gap-8">
              <Link href="/" className="flex items-center text-3xl font-bold text-gray-900">
                <Image src="/t25.svg" alt="tron 25' Logo" width={50} height={50} className="inline-block" />
              </Link>
              
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-base font-bold transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-purple-600 font-black'
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;