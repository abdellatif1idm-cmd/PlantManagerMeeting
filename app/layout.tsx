import type { Metadata } from "next";
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Cormorant+Garamond:wght@300;400&display=swap" rel="stylesheet" />

import {
  Poppins,
  Montserrat,
  Orbitron,
  Send_Flowers,
  Sacramento,
  Plus_Jakarta_Sans,
  Gloock,
  Cormorant_Garamond,
} from "next/font/google";
import Providers from "@/context/providers/Providers";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/ui/menus/MobileMenu";
import EventBase from "@/data/fr/1-EventBase.json";
import { Toaster } from "react-hot-toast";
import favicon from '../public/images/favicon/favicon-512.png'

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const send_flowers = Send_Flowers({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-send-flowers",
});

const sacramento = Sacramento({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sacramento",
});

const plus_jakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const gloock = Gloock({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-gloock",
});

const cormorant_garamond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: {
    default: EventBase.EventShortName,
    template: `%s | ${EventBase.EventShortName}`,
  },
  description: EventBase.EventTopic,
  icons: {
    icon: EventBase.EventFavicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} ${cormorant_garamond.variable} ${gloock.variable} ${plus_jakarta.variable} ${montserrat.variable} ${orbitron.variable} ${send_flowers.variable} ${sacramento.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <Toaster />
          <MobileMenu />
        </Providers>
      </body>
    </html>
  );
}
