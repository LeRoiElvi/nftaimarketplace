import type { Metadata } from "next";
import { Lexend, Geist_Mono } from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";
import "./globals.css";
import { Providers } from "./providers";

const lexend: NextFont = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const geistMono: NextFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFT AI Marketplace",
  description: "A cutting-edge marketplace for AI-generated NFTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}