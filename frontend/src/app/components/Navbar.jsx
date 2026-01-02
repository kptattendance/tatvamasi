"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-soft/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-primary tracking-wide">
            Tatwamasi
          </span>
          <span className="text-xs text-gray-500 italic">You are that</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {["About", "Our Causes", "Programs", "Events", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="relative hover:text-primary transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-4 py-2 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-white transition"
          >
            Get Help
          </Link>

          <Link
            href="/join"
            className="px-5 py-2 rounded-full bg-accent text-gray-900 font-semibold hover:brightness-95 transition shadow-sm"
          >
            Join Us
          </Link>

          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-opacity-90 transition shadow">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition shadow"
            >
              Dashboard
            </Link>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
