import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
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
  metadataBase: new URL("https://www.newperfectinc.com"),
  title: {
    default: "New Perfect Incorporation | Precision Brass Components Manufacturer",
    template: "%s | New Perfect Incorporation",
  },
  description:
    "New Perfect Incorporation manufactures precision brass components, CNC-turned parts, fittings and custom metal components in Jamnagar, Gujarat, India.",
  openGraph: {
    siteName: "New Perfect Incorporation",
    locale: "en_IN",
    type: "website",
    url: "https://www.newperfectinc.com",
    images: [
      {
        url: "/images/company_logo/New Logo Final final.png",
        width: 1200,
        height: 630,
        alt: "New Perfect Incorporation — Precision Brass Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Perfect Incorporation | Precision Brass Components Manufacturer",
    description:
      "New Perfect Incorporation manufactures precision brass components, CNC-turned parts, fittings and custom metal components in Jamnagar, Gujarat, India.",
  },
  icons: {
    icon: [
      { url: "/images/company_logo/np-mark.png", type: "image/png" },
    ],
    shortcut: "/images/company_logo/np-mark.png",
    apple: "/images/company_logo/np-mark.png",
  },
  alternates: {
    canonical: "https://www.newperfectinc.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "New Perfect Incorporation",
  url: "https://www.newperfectinc.com",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "New Perfect Incorporation",
  url: "https://www.newperfectinc.com",
  logo: "https://www.newperfectinc.com/images/company_logo/New Logo Final final.png",
  description:
    "ISO 9001:2015 certified manufacturer, exporter and supplier of precision brass and copper components from Jamnagar, Gujarat, India.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-warm text-text-charcoal font-sans" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
