import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pollos.vercel.app"), // [PLACEHOLDER] — replace with real domain
  title: {
    default: "POLLOS — 50 Unique Characters",
    template: "%s | POLLOS",
  },
  description:
    "A collection of 50 unique hand-illustrated NFT characters on Ethereum. Launching April 16, 2026.",
  openGraph: {
    title: "POLLOS — 50 Unique Characters on Ethereum",
    description:
      "50 hand-illustrated 1/1 NFT characters. Each one unique. Launching April 16, 2026.",
    images: [{ url: "/images/placeholder-og.svg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POLLOS — 50 Unique Characters",
    description:
      "50 hand-illustrated 1/1 NFT characters on Ethereum.",
    images: ["/images/placeholder-og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
