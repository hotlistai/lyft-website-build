import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { GoogleAnalyticsPageView } from "@/components/analytics/GoogleAnalyticsPageView";
import { getSiteUrl } from "@/lib/site";
import { Suspense } from "react";

import "../index.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lyft Email | Transparent Outbound Engine",
    template: "%s | Lyft Email",
  },
  description:
    "Human quality outbound that lands in inboxes and starts real conversations. Free warm up. Pay when inbox ready. See your first conversation in minutes.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Lyft Email | Transparent Outbound Engine",
    description:
      "Human quality outbound that lands in inboxes and starts real conversations. Free warm up. Pay when inbox ready. See your first conversation in minutes.",
    images: [
      {
        url: "https://storage.googleapis.com/gpt-engineer-file-uploads/ps1hw3IhOrSOEVE9jWRCY0aJ4My1/social-images/social-1762611098940-Generated Image November 08, 2025 - 8_07AM.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyft Email | Transparent Outbound Engine",
    description:
      "Human quality outbound that lands in inboxes and starts real conversations. Free warm up. Pay when inbox ready. See your first conversation in minutes.",
    images: [
      "https://storage.googleapis.com/gpt-engineer-file-uploads/ps1hw3IhOrSOEVE9jWRCY0aJ4My1/social-images/social-1762611098940-Generated Image November 08, 2025 - 8_07AM.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <Suspense fallback={null}>
          <GoogleAnalyticsPageView />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
