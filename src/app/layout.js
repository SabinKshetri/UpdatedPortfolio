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
  title: "Sabin Kshetri | Full-Stack Software Developer from Nepal",
  description:
    "Sabin Kshetri is a passionate full-stack software developer from Nepal, specializing in building modern web applications using the latest technologies. Explore his portfolio and connect for innovative digital solutions.",
  robots: "index, follow",
  openGraph: {
    title: "Sabin Kshetri | Software Developer",
    description: "Explore Sabin's portfolio and projects built with modern web technologies.",
    url: "https://sabindangi1.com.np/",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
