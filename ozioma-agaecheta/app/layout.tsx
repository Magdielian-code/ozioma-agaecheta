import { Nav } from "components/Home/Nav";
import { Montserrat } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
 
import Footer from "@/components/Home/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "Ozioma Agaecheta",
  description: "Personal website",
};

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body  className="relative bg-[#1c1917]" color="white">
        <Providers>
          <Nav/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}


