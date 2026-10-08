import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted Geist (bundled with Next.js) — the build environment has no
// network access, so next/font/google cannot be used here.
const inter = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hope Soko | Web Developer",
    template: "%s | Hope Soko",
  },
  description:
    "Portfolio of Hope Soko — Computer Science graduate, developer and IT professional building reliable, efficient and user-friendly digital solutions.",
  keywords: [
    "Hope Soko",
    "Web Developer",
    "Portfolio",
    "Software Developer",
    "Computer Science",
  ],
  openGraph: {
    title: "Hope Soko | Web Developer",
    description:
      "Portfolio of Hope Soko — Computer Science graduate, developer and IT professional building reliable, efficient and user-friendly digital solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hope Soko | Web Developer",
    description:
      "Portfolio of Hope Soko — Computer Science graduate, developer and IT professional building reliable, efficient and user-friendly digital solutions.",
  },
};

// Runs before first paint so the saved theme is applied without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}

