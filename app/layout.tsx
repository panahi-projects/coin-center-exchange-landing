"use client";
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { DirectionProvider } from "@/provider/DirectionProvider";
import { useToggleMode } from "@/stores/useToggleMode";
import { ThemeProvider } from "@/provider/ThemeProvider";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const metadata: Metadata = {
//   title: "Coin Center Exchange",
//   description: "Coin Center Exchange Web Application",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useToggleMode();
  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={theme}
          enableSystem
          disableTransitionOnChange
        >
          <DirectionProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </DirectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
