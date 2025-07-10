import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cafe du Port – A Taste of France in Halifax",
  description:
    "Discover Café du Port, a French bakery in Halifax offering artisan pastries, custom cakes, and a warm, Parisian-inspired café experience.",
  keywords: ["Cafe Halifax", "French Cafe", "Barrington Cafe"],
  openGraph: {
    title: "Cafe du Port",
    description: "A taste of France in the heart of Halifax.",
    url: "https://caféduport.com",
    siteName: "Cafe du Port",
    images: [
      {
        url: "/catering.JPG",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
