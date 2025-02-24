"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50 p-3 border-b border-gray-700">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/mobile" className="text-lg font-bold">BFCMEME</Link>

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none transform">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
      <div className="mt-3 bg-gray-800 py-2 space-y-2 text-center rounded-2xl">
          <Link href="/mobile/marketplace" className="block py-2 text-white">Marketplace</Link>
          <Link href="/mobile/whitelist" className="block py-2 text-blue-500">Whitelist</Link>
          <Link href="/mobile/gas-tracker" className="block py-2 text-red-600">Gas Emission Tracker</Link>
          <Link href="/mobile/whitepaper" className="block py-2 text-green-700">Whitepaper</Link>
          <Link href="/mobile/disclaimer" className="block py-2 text-yellow-500">Disclaimer</Link>
          <Link href="#MobileAbout" className="block py-2  text-orange-600">About</Link>
          <Link href="#MobileRoadmapTokenomics" className="block py-2 text-pink-500">Roadmap/Tokenomics</Link>
        </div>
      )}
    </nav>
  );
}
