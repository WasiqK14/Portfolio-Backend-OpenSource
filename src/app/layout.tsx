import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Afacad_Flux } from "next/font/google";

export const metadata: Metadata = {
  title: "Ahmad Bin Shafiq",
  description: "Python Engineer & AI Specialist",
};

const afacad_flux = Afacad_Flux({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <ThemeProvider attribute="class">
        <body className={` antialiased ${afacad_flux.className}`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
