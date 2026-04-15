"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ← Import necessario
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <html lang="it" className={cn("font-sans", geist.variable)}>
        <body>
          <header>
            <nav className="bg-white shadow-md">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">

                  {/* Logo PNG */}
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <Image
                        src="/Logo/logo.png"     // ← Metti il tuo PNG dentro /public
                        alt="Logo"
                        width={120}         // larghezza desiderata
                        height={40}         // altezza desiderata
                        className="object-contain"
                      />
                    </Link>
                  </div>

                  {/* Menu Desktop */}
                  <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                    <Link href="/contacts" className="text-gray-700 hover:text-blue-500">Contatti</Link>
                    <Link href="/blog" className="text-gray-700 hover:text-blue-500">Blog</Link>
                  </div>

                  {/* Mobile Button */}
                  <div className="md:hidden">
                    <button
                      onClick={() => setOpen(!open)}
                      className="text-gray-700"
                    >
                      ☰
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Menu */}
              {open && (
                <div className="md:hidden px-4 pb-4">
                  <Link href="/" className="block py-2 text-gray-700">Home</Link>
                  <Link href="/contatti" className="block py-2 text-gray-700">Contatti</Link>
                  <Link href="/blog" className="block py-2 text-gray-700">Blog</Link>
                </div>
              )}
            </nav>
          </header>
          <main className="py-10">
            {children}
          </main>
        </body>
      </html>
    </>
  );
}