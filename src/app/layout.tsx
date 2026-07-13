import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PORTFOLIO | JAIME JARQUE",
  description: "Brutalist developer portfolio built with Next.js and Tailwind.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mono noise-bg">{children}</body>
    </html>
  );
}