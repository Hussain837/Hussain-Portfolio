"use client";

import dynamic from "next/dynamic";

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);

const WebVitals = dynamic(
  () => import("@/components/common/WebVitals"),
  { ssr: false }
);

export default function ClientProviders() {
  return (
    <>
      <GoogleAnalytics />
      <WebVitals />
    </>
  );
}
