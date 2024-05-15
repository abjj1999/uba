import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdvancedNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "74 degree LLC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <AdvancedNavbar />
        <div className="bg-gray-900 ">
        {children}
        <Footer />
        </div>
        <Toaster />
        </body>
    </html>
  );
}
