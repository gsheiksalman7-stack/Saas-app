import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./providers/session-wrapper";
import { IMAGES } from "@/constants/images";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trackify-saas-app.vercel.app/"), // replace after deploy

  title: {
    default: "Trackify – Reliable SaaS for High-Performance Teams",
    template: "%s | Trackify",
  },

  description:
    "Trackify builds reliable SaaS products focused on performance, security, and exceptional user experience for teams worldwide.",

  keywords: [
    "Trackify",
    "SaaS",
    "Performance",
    "Secure SaaS",
    "Team productivity",
    "Cloud software",
  ],

  openGraph: {
    title: "Trackify – Reliable SaaS for High-Performance Teams",
    description:
      "We build reliable SaaS products focused on performance, security, and great user experience for teams worldwide.",
    url: "https://trackify-saas-app.vercel.app/",
    siteName: "Trackify",
    images: [
      {
        url: IMAGES.APP_LOGO,
        width: 1200,
        height: 630,
        alt: "Trackify SaaS Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trackify – Reliable SaaS for High-Performance Teams",
    description:
      "Performance. Security. Great UX. Built for modern teams.",
    images: [IMAGES.APP_LOGO],
  },

  icons: {
    icon: IMAGES.APP_ICON,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full overflow-x-hidden`}
      >
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
