import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import NextAuthProvider from "../Providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AmarKitchen",
  description: "Empowering Home Chiefs, Serving Quality Meal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthProvider>
      <Providers>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      </Providers>
      </NextAuthProvider>
    </html>
  );
}
