import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const SUITFont = localFont({
  src: "../public/fonts/SuitVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "<Kimnerd />",
  description: "김너드 개인 포트폴리오 웹사이트, Made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={SUITFont.className}>{children}</body>
    </html>
  );
}
