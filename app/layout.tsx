import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sales Portfolio | Revenue-Focused Growth Specialist",
  description:
    "Explore measurable sales achievements, case studies, and client success stories from a B2B revenue growth specialist.",
  keywords: [
    "sales portfolio",
    "b2b sales",
    "revenue growth",
    "sales strategist",
    "case studies"
  ],
  metadataBase: new URL("https://sales-portfolio.netlify.app"),
  openGraph: {
    title: "Sales Portfolio | Revenue-Focused Growth Specialist",
    description:
      "Results-driven sales portfolio highlighting revenue impact, proven case studies, and customer testimonials.",
    url: "https://sales-portfolio.netlify.app",
    siteName: "Sales Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Portfolio | Revenue-Focused Growth Specialist",
    description:
      "Discover the sales systems and wins that helped B2B teams exceed quota and close enterprise deals."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
