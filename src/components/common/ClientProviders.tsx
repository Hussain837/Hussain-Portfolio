"use client";

import dynamic from "next/dynamic";
import { MotionConfig } from "framer-motion";

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
    /*
     * A single MotionConfig for the whole app. `reducedMotion="user"` makes
     * every Framer Motion animation on the site - reveals, staggers, layout
     * transitions, springs - respect the OS setting centrally, so individual
     * components do not each have to check for it themselves.
     */
    <MotionConfig reducedMotion="user">
      <GoogleAnalytics />
      <WebVitals />
    </MotionConfig>
  );
}
