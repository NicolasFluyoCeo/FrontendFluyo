"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <Header />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}
