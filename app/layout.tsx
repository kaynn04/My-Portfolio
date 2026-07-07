import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeRescueToggle from "@/components/theme-rescue-toggle";
import BackgroundSpotlight from "@/components/background-spotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyan Oclares | Software Engineer",
  description:
    "Portfolio of Kyan Oclares, an IT graduate focused on software engineering, web development, and AI development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative isolate flex min-h-full flex-col">
        <BackgroundSpotlight />
        <div className="relative z-10">{children}</div>
        <ThemeRescueToggle />
      </body>
    </html>
  );
}
