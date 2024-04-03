import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.scss";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.className + ` ${fraunces.variable}`}>
        <Navbar />
        <main className="pt-[88px]">{children}</main>
      </body>
    </html>
  );
}
