import "./globals.scss";
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";
import { site, seo } from "@/data/site";

/**
 * Typography system.
 *
 * Two families carry the identity; everything else is a weight/size decision.
 * Only the weights actually used are requested - the previous setup loaded
 * 9 weights x 2 styles of Poppins (59 font faces) for ~4 weights in use.
 *
 * The generated variable names (`--font-display`, `--font-body`, `--font-mono`)
 * are consumed by globals.scss, which is the single place the scale, tracking
 * and fluid sizes are defined.
 */
const display = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const body = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
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
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
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
