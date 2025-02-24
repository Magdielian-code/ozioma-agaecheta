import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";
import { Montserrat } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "@/components/ui/provider";

config.autoAddCss = false;

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
    <html lang="en" suppressHydrationWarning className={montserrat.className}>
      <body className="bg-bg">
        <Provider>
          <Nav />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}