import { Inter } from "next/font/google";
import { ThemeProvider } from "@components/ui/theme-provider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./ConvexClientProvider"; 
import { shadesOfPurple } from "@clerk/themes";
import Header from "@components/header";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});


export const metadata = {
  title: "AI Content Creator",
  description: "Content creation powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // Use the variable name for Inter font
        className={`${inter.variable} antialiased`} 
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* ClerkProvider must wrap ConvexClientProvider to pass auth session */}
          <ClerkProvider
            appearance = {{
              baseTheme: shadesOfPurple,
            }}
          >
            <ConvexClientProvider>
              <Header />
              <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
                {children}
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}