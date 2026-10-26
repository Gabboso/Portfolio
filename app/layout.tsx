import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Container from "@/components/container";
import HeaderMenu from "@/components/headerMenu";
import MobileMenu from "@/components/mobileMenu";
import Footer from "@/components/footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={cn("dark font-sans scroll-smooth", geist.variable)}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border px-6 py-4">
          <Container className="flex justify-between items-center">
            <span className="font-bold text-foreground text-lg">
              Gabriele Di Mezza
            </span>
            <div className="flex items-center gap-4">
              <HeaderMenu />
              <MobileMenu />
            </div>
          </Container>
        </header>
        <main className="flex-1 py-10">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
