import type { Metadata } from "next";
import { Outfit, Darker_Grotesque } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fluyo: Transparencia y acceso a licitaciones públicas",
  description: "Fluyo facilita el acceso a contrataciones públicas en América Latina, permitiendo a las empresas descubrir oportunidades reales con total transparencia y sin corrupción.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${darkerGrotesque.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
