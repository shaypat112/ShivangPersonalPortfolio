import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiv Patel | Portfolio",
  description:
    "Portfolio for Shiv Patel featuring YETI Robotics scouting systems, StudentHub, Votrio, and modern web development work.",
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
      <body className="min-h-full flex flex-col">
        <Script id="theme-script" strategy="beforeInteractive">
          {`try {
            const storedTheme = window.localStorage.getItem("theme");
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            const activeTheme = storedTheme ?? systemTheme;
            document.documentElement.classList.toggle("dark", activeTheme === "dark");
          } catch (error) {
            console.error("Theme bootstrap failed", error);
          }`}
        </Script>
        {children}
      </body>
    </html>
  );
}
