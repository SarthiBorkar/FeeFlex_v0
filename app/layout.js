import { Inter } from "next/font/google";
import "./globals.css";
import  Navbar  from "@/components/Navbar";
import Card from "@/components/SwapCard";
import Overview from "@/components/Overview";
import Footer from "@/components/Footer";

import AppWalletProvider from "@/components/AppWalletProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "feeflex",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <AppWalletProvider>
        <Navbar />
        <Card />

          {children}
        <Overview />
        <Footer />
        </AppWalletProvider>
      </body>
    </html>
  );
}
