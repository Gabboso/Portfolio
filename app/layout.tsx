import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Container from "@/components/container";
import HeaderMenu from "@/components/headerMenu";
import MobileMenu from "@/components/mobileMenu";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-background text-foreground">
        <header className="relative w-full shadow-md px-6 py-4">
          <Container className="flex justify-end items-center">
            <HeaderMenu />
            <MobileMenu />
          </Container>
        </header>
        <main className="py-10">
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}