import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Katomaran",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
