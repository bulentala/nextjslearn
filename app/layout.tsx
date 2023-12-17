import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Next.JS Learn",
  description: "This is the way.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Header />
        <main>
          {children}
          <Analytics />
          <SpeedInsights />

          <Script src='https://www.googletagmanager.com/gtag/js?id=G-2JR8B53RKS' />
          <Script id='google-analytics'>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-2JR8B53RKS');
        `}
          </Script>
        </main>
        <Footer />
      </body>
    </html>
  );
}
