import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./Component/footer";
import Navbar from "./Component/header";
import styles from "../app/Styles/component/_myContainer.module.scss"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styles.maincontainer} bg-[#2B2B2B] antialiased`}
      >
        <div >
        <Navbar />
        <div className={styles.container}>
        {children}
        </div>
        <Footer />
        </div>
      </body>
    </html>
  );
}
