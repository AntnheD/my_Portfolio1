"use client";

import Link from "next/link";
import { useState } from "react";
import ImageAvatars from "../avatar/avatorimge";
import { Download, Menu } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/Antnhe_CV.pdf"; // Ensure the file is in the public directory
    link.download = "Antnhe_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-transparent text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="text-sm font-bold flex items-center gap-2">
        <ImageAvatars /> Antnhe
      </Link>

      <div className="flex items-center gap-4">
        {/* Dropdown Menu */}
        <div className="relative">
          <button
            className="text-white hover:text-gray-300 flex items-center gap-1"
            onClick={toggleMobileMenu}
          >
            <Menu className="w-6 h-6" />
          </button>

          {isMobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800/90 p-4 rounded-md shadow-md z-10 backdrop-blur-md">
              
              <button
                onClick={handleDownload}
                className="w-full text-left py-2 text-white hover:text-gray-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download CV
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
