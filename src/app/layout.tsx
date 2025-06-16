import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Kato Video Analytics",
  description: "AI Video Surveillance Platform",
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
