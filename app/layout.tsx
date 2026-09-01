import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "New Perfect Incorporation | Every Precision Components",
    template: "%s | New Perfect Incorporation",
  },
  description:
    "ISO 9001:2015 certified manufacturer, exporter & supplier of Every Precision Components from Jamnagar, Gujarat, India",
  icons: {
    icon: [
      { url: "/images/company_logo/np-mark.png", type: "image/png" },
    ],
    shortcut: "/images/company_logo/np-mark.png",
    apple: "/images/company_logo/np-mark.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "New Perfect Incorporation",
  url: "https://www.newperfectinc.com",
  description:
    "ISO 9001:2015 certified manufacturer, exporter and supplier of precision brass and copper components.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 4145, GIDC Phase 3, Dared",
    addressLocality: "Jamnagar",
    addressRegion: "Gujarat",
    postalCode: "361004",
    addressCountry: "IN",
  },
  telephone: "+91 78179 42727",
  email: "info@newperfectinc.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-warm text-text-charcoal font-sans" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
