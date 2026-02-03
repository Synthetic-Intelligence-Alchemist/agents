import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Fredoka, Quicksand } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-display" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Root & Bloom",
  description: "Where Montessori meets Waldorf with Reggio Emilia in your living room.",
  metadataBase: new URL("https://root-bloom.example.com")
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${quicksand.variable}`}>
      <body className="min-h-screen bg-moss-50 text-moss-900">
        <div className="min-h-screen bg-gradient-to-br from-moss-50 via-white to-bloom-50/40">
          {children}
        </div>
      </body>
    </html>
  );
}
