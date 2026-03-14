"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:scale-110 hover:font-bold text-gray-700 hover:text-gray-900 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="hover:scale-110 hover:font-bold text-gray-700 hover:text-gray-900 transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="hover:scale-110 hover:font-bold text-gray-700 hover:text-gray-900 transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:scale-110 hover:font-bold text-gray-700 hover:text-gray-900 transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:font-bold hover:scale-110 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:scale-90 hover:font-bold text-gray-700 hover:text-gray-900 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="hover:scale-90 hover:font-bold text-gray-700 hover:text-gray-900 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="hover:scale-90 hover:font-bold text-gray-700 hover:text-gray-900 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:scale-90 hover:font-bold text-gray-700 hover:text-gray-900 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
