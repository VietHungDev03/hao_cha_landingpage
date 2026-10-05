import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haocha — Healthy · Balance · Light",
  description: "Trà sữa thanh nhẹ từ trà tươi, sữa và mật ong tự nhiên.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
