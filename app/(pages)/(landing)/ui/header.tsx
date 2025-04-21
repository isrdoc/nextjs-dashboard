"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { number: "01", text: "For Patients", href: "/patients" },
    { number: "02", text: "For Clinicians", href: "/clinicians" },
    { number: "03", text: "For Research", href: "/research" },
    { number: "04", text: "Products", href: "/products" },
    { number: "05", text: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side wrapper for menu and logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full p-3 inline-flex items-center justify-center text-white hover:text-white/80 bg-white/10 hover:bg-white/20 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <Image
                  src="/hamburger.svg"
                  alt="Menu"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              )}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Head Diagnostics Logo"
                  width={180}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            {/* Desktop Navigation */}
            <nav className="flex space-x-8 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.number}
                  href={item.href}
                  className="text-sm text-white hover:text-white/80 transition-colors group relative pt-4"
                >
                  <span className="absolute top-0 right-0 text-[10px] text-white/60 group-hover:text-white/80 transition-colors">
                    {item.number}
                  </span>
                  {item.text}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-8 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6276B7] hover:bg-[#7286C7] transition-colors"
            >
              Let's talk
            </Link>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/5 backdrop-blur-sm rounded-lg mt-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.number}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white/80 hover:bg-white/10 transition-colors group relative pt-6"
                  >
                    <span className="absolute top-2 right-3 text-[10px] text-white/60 group-hover:text-white/80 transition-colors">
                      {item.number}
                    </span>
                    {item.text}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-white bg-[#6276B7] hover:bg-[#7286C7] transition-colors"
                >
                  Let's talk
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
