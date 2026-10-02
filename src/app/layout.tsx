import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://savourcatering.com"),
  title: "SAVOUR Catering | Exceptional Food for Unforgettable Moments",
  description:
    "SAVOUR creates premium culinary experiences for weddings, celebrations, corporate events and unforgettable occasions.",
  keywords: [
    "luxury catering",
    "wedding catering",
    "gourmet food catering",
    "SAVOUR catering",
    "private chef",
    "event dining",
    "live food counters",
  ],
  openGraph: {
    title: "SAVOUR Catering | Exceptional Food for Unforgettable Moments",
    description:
      "SAVOUR creates premium culinary experiences for weddings, celebrations, corporate events and unforgettable occasions.",
    url: "https://savourcatering.com",
    siteName: "SAVOUR Luxury Catering",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SAVOUR Catering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-sans bg-[#F7F3EA] text-[#1E211D] min-h-screen selection:bg-[#B58A45]/20 selection:text-[#263426]">
        {children}
      </body>
    </html>
  );
}
