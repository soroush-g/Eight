import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from './components/ClientOnly';
import Modal from "./components/modals/Modal";

const vazir = Vazirmatn({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: "AIREVENT",
  description: "Covering events in all parts of the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir='rtl' lang="fa-Ir">
      <body className={vazir.className}>
        <ClientOnly>
          <Modal titl isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
