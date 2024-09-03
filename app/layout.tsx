import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const popins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Test UI",
  description: "APP for frontend UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popins.className}>{children}</body>
    </html>
  );
}
