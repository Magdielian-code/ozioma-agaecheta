import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import "../lib/fontawesome"; // Import the library setup
import { Providers } from "./providers";
import Sidebar from "ui/Sidebar";

config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduAmor",
  description: "Eduamor app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Sidebar>{children}</Sidebar>
        </Providers>
      </body>
    </html>
  );
}
