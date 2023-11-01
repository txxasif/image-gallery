"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/redux-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
