import type { Metadata, Viewport } from "next";
import { Outfit, Inter, Space_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const fontDisplay = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fontMono = Space_Mono({
  variable: "--font-mono-space",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ABRIL PETRUZZO | Pilates & Elite Reformer Coaching",
  description: "PETRUZZO ABRIL - ENTRENAMIENTOS PERSONALIZADOS",
  metadataBase: new URL("https://abrilpetruzzo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ABRIL PETRUZZO | Pilates & Elite Reformer Coaching",
    description: "PETRUZZO ABRIL - ENTRENAMIENTOS PERSONALIZADOS",
    url: "https://abrilpetruzzo.com",
    siteName: "Abril Petruzzo Coaching",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABRIL PETRUZZO | Pilates & Elite Coaching",
    description: "PETRUZZO ABRIL - ENTRENAMIENTOS PERSONALIZADOS",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="bg-obsidian text-silver min-h-full flex flex-col font-sans selection:bg-gold-accent selection:text-obsidian">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
