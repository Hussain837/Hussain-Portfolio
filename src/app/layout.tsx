import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";

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
  title: "Hussain Zaidi",
  description:
    "Hussain Zaidi is a proficient Software Engineer and Full Stack Developer from India, skilled in front-end and back-end development using modern tech stacks.",
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
  keywords: [
    "Hussain Zaidi",
    "Hussain",
    "Hussain-zaidi",
    "zaidi Hussain",
    "founder of nixlab",
    "nixlab founder",
    "full stack developer",
    "indian developer",
    "Hussain github",
  ],
  openGraph: {
    title: "Hussain Zaidi",
    description:
      "Hussain Zaidi is a proficient Software Engineer and Full Stack Developer from India, skilled in front-end and back-end development using modern tech stacks.",
    url: "https://hussain-portfolio-nine.vercel.app/", // replace with your live URL
    siteName: "Hussain Zaidi",
    images: [
      {
        url: "/profile.jpeg", // Must be an absolute URL in production
        width: 1200,
        height: 630,
        alt: "Hussain Zaidi - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussain Zaidi",
    description:
      "Hussain Zaidi is a proficient Software Engineer and Full Stack Developer from India, skilled in front-end and back-end development using modern tech stacks.",
    images: ["/profile.jpeg"], // Must be absolute in production
  },
};

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
        {isDebug ? <WebVitals /> : null}
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
