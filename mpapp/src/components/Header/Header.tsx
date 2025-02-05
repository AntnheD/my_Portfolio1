'use client';

import Link from 'next/link';
import { useState } from 'react';
import ImageAvatars from '../avatar/avatorimge';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-transparent text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50"> {/* Key changes here */}
      <Link href="/" className="text-sm font-bold">
        <ImageAvatars /> Antnhe
      </Link>

      <button className="text-white" onClick={toggleMobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-16 right-4 bg-gray-800/70 p-4 rounded-md shadow-md z-10 backdrop-blur-md"> {/* Added backdrop blur and semi-transparent background */}
          <Link href="/support" className="block py-2 text-white">Support</Link>
          <Link href="/projects" className="block py-2 text-white">More Projects</Link>
          <Link href="/faqs" className="block py-2 text-white">FAQS</Link>
          <Link href="/privacy" className="block py-2 text-white">Privacy Terms</Link>
          <Link href="/client-support" className="block py-2 text-white">Client Support</Link>
          <Link href="/site-map" className="block py-2 text-white">Site Map</Link>
          <Link href="/tutorials" className="block py-2 text-white">Tutorials</Link>
          <Link href="/subscriptions" className="block py-2 text-white">Subscriptions</Link>
          <Link href="/contact" className="block py-2 text-white">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;