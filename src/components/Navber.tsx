"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* ✅ Logo */}
          <Link
            href="/"
            className={
              " text-2xl sm:text-xl md:text-2xl font-bold text-[#020817] tracking-tight"
            }
          >
            TaskFlow
          </Link>

          {/* ✅ Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-800 font-medium hover:text-[#6c7fd8] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/ProductsPage"
              className="text-gray-800 font-medium hover:text-[#6c7fd8] transition-colors"
            >
             Add Task
            </Link>
            <Link
              href="/userDashboard"
              className="text-gray-800 font-medium hover:text-[#6c7fd8] transition-colors"
            >
              Dashboard
            </Link>
          </div>

          {/* ✅ Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/register"
                className="bg-[#6c7fd8] hover:bg-[#4557a8] text-white rounded px-4 py-2 text-sm transition-colors"
              >
                Register
              </Link>
            </div>

            {/* ✅ Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <FaTimes size={22} className="text-[#6c7fd8]" />
              ) : (
                <FaBars size={22} className="text-[#6c7fd8]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t px-4 py-4 space-y-4">
          {/* Nav Links */}
          <Link
            href="/"
            className="block text-gray-800 font-medium hover:text-[#6c7fd8]"
          >
            Home
          </Link>
          <Link
            href="/ProductsPage"
            className="block text-gray-800 font-medium hover:text-[#6c7fd8]"
          >
            Add Task
          </Link>
          <Link
            href="/userDashboard"
            className="block text-gray-800 font-medium hover:text-[#6c7fd8]"
          >
            Dashboard
          </Link>

          <div className="flex flex-col gap-2">
            <Link
              href="/login"
              className="w-full text-center bg-[#6c7fd8] hover:bg-[#4557a8] text-white rounded px-4 py-2 text-sm transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="w-full text-center bg-[#6c7fd8] hover:bg-[#4557a8] text-white rounded px-4 py-2 text-sm transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
