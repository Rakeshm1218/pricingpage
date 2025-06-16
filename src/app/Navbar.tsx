"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 w-full bg-gradient-to-r from-blue-50/70 to-blue-100/70 backdrop-blur-md border-b border-blue-200/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_image_blue.png"
            alt="Katomaran"
            width={140}
            height={140}
            className="object-contain"
          />
        </Link>
      </div>
    </nav>
  );
}
