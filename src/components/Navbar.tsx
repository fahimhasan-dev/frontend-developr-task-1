"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <section
     
    >
      {/* background: clean dark gradient + super soft orange glow */}
    

      {/* NAVBAR (internal padding only) */}
      <header className="shadow-md fixed top-0 left-0 w-full z-50">
        <div className="px-4 pt-4">
          <div
            className="
              mx-auto max-w-[1780px]
              rounded-full border border-orange-500/25 bg-[#0c0c0c33]
              bg-[radial-gradient(900px_380px_at_70%_40%,rgba(255,115,0,0.10),transparent_65%)] backdrop-blur
              ring-1 ring-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              px-4 sm:px-6
            "
          >
            <div className="navbar min-h-16 text-white">
              {/* Brand */}
              <div className="navbar-start">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-2 py-1"
                >
                  <span className="text-xl font-extrabold tracking-tight">
                    Task
                  </span>
                  <span className="hidden sm:inline-flex items-center rounded-full border border-orange-500/30 px-2 py-0.5 text-xs text-orange-400">
                    Flow
                  </span>
                </Link>
              </div>

              {/* Desktop links */}
              <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-1">
                  <li>
                    <Link
                      href="/"
                      className="btn  btn-ghost btn-sm rounded-full text-[15px] tracking-tight hover:bg-orange-500/10 hover:text-orange-400"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/task"
                      className="btn  btn-ghost btn-sm rounded-full text-[15px] tracking-tight hover:bg-orange-500/10 hover:text-orange-400"
                    >
                      Task List View
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/addTasks"
                      className="btn  btn-ghost btn-sm rounded-full text-[15px] tracking-tight hover:bg-orange-500/10 hover:text-orange-400"
                    >
                      Add Tasks
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Right CTA + mobile toggle */}
              <div className="navbar-end gap-2">
                <Button>
                  {" "}
                  <Link
                    href="/contact"
                    className="
                    hidden sm:inline-flex h-10 min-h-0 items-center 
                  "
                  >
                    Get Started
                  </Link>
                </Button>
                <button
                  aria-label="Open menu"
                  onClick={() => setMenuOpen(true)}
                  className="btn btn-ghost btn-circle lg:hidden"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-x-3 top-6 rounded-3xl bg-[#0f0f11] text-white shadow-2xl border border-orange-500/25">
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-bold text-lg">COMMSERVE</span>
              <button
                aria-label="Close menu"
                className="btn btn-ghost btn-circle"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            <ul className="menu p-4 gap-2">
              {links.map((l) => {
                const href = l === "Home" ? "/" : `/${l.toLowerCase()}`;
                return (
                  <li key={l}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-full text-base font-medium hover:bg-orange-500/10 hover:text-orange-400"
                    >
                      {l}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="p-4 pt-0">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn w-full sm:hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0"
              >
                Get Started
              </Link>
              <div className="py-4" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
