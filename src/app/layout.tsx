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
  title: "SAMMY: The AI Customer Success Solution",
  description: "The only platform that keeps your users delighted by generating bespoke user walkthroughs, documentation, and tailored onboardings that automatically update with your product.",
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
