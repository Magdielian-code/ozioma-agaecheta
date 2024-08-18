import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "components/Nav";
import Hero from "@/components/Hero";


export const metadata: Metadata = {
  title: "Ozioma Agaecheta",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className="relative bg-[#1D1817]" color="white">
        <Providers>
          <Nav/>
          <Hero/>
        </Providers>
      </body>
    </html>
  );
}
