import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";
import { site, seo } from "@/data/site";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});


export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { url: "/favicon.ico", rel: "icon", sizes: "16x16", type: "image/x-icon" },
    { url: "/favicon.ico", rel: "icon", sizes: "32x32", type: "image/x-icon" },
    { url: "/favicon.ico", rel: "icon", sizes: "48x48", type: "image/x-icon" },
    { url: "/favicon.ico", rel: "icon", sizes: "64x64", type: "image/x-icon" },
  ],
  keywords: [...seo.keywords],
  openGraph: {
    title: site.name,
    description: seo.shortDescription,
    url: site.siteUrl,
    siteName: site.name,
    images: [
      {
        url: site.profileImage, // Must be an absolute URL in production
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.role}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: seo.shortDescription,
    images: [site.profileImage], // Must be absolute in production
  },
};

import ClientProviders from "@/components/common/ClientProviders";

const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <body className={isDebug ? "debug-screens" : ""}>
        <ClientProviders />
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
