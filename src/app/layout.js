import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.sabindangi1.com.np"),
  title: "Sabin Kshetri | Full-Stack Software Developer from Nepal",
  description:
    "Sabin Kshetri is a passionate full-stack software developer from Nepal, specializing in building modern web applications using the latest technologies. Explore his portfolio and connect for innovative digital solutions.",
  keywords: [
    "Sabin Kshetri",
    "Full-Stack Developer",
    "Software Engineer Nepal",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sabin Kshetri | Software Developer",
    description:
      "Explore Sabin's portfolio and projects built with modern web technologies.",
    url: "https://www.sabindangi1.com.np/",
    siteName: "Sabin Kshetri Portfolio",
    images: [
      {
        url: "/sabinkshetri.png",
        width: 1200,
        height: 630,
        alt: "Sabin Kshetri Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabin Kshetri | Full-Stack Developer",
    description: "Explore Sabin's portfolio and web development work.",
    images: ["/sabinkshetri.png"],
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sabin Kshetri",
    "url": "https://www.sabindangi1.com.np",
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance",
    },
    "sameAs": [
      "https://github.com/SabinKshetri",
      "https://www.linkedin.com/in/sabin-dangi-73b636207/"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
