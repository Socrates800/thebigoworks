import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Big O Works | Engineering Digital Excellence for Global Brands",
  description:
    "We build scalable apps, websites, and cloud systems for companies across Europe, UK & USA. Premium tech agency for Portugal, UK, USA and international clients.",
  keywords: [
    "tech agency",
    "web development",
    "mobile app development",
    "Portugal",
    "UK",
    "USA",
    "Europe",
    "SaaS",
    "DevOps",
    "UI/UX design",
  ],
  openGraph: {
    title: "The Big O Works | Engineering Digital Excellence for Global Brands",
    description:
      "We build scalable apps, websites, and cloud systems for companies across Europe, UK & USA.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
