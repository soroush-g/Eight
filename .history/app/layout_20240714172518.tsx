import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Covering ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir='rtl' lang="fa-Ir">
      <body className={vazir.className}>{children}</body>
    </html>
  );
}
