"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Tatwamasi</span>
          <span className="hidden sm:block text-sm text-gray-500">
            You are that
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/causes" className="hover:text-primary">
            Our Causes
          </Link>
          <Link href="/programs" className="hover:text-primary">
            Programs
          </Link>
          <Link href="/events" className="hover:text-primary">
            Events
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-block px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            Get Help
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-md bg-primary text-black hover:bg-accent transition"
          >
            Join Us
          </Link>

          <div>
          <SignedOut>
            <SignInButton>
              <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="px-5 py-2 bg-gray-200 font-medium rounded-full shadow hover:bg-gray-300 transition"
            >
              Dashboard
            </Link>
          </SignedIn>
        </div>
        </div>
      </nav>
    </header>
  );
}
