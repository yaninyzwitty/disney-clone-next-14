import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "disney plus",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, `bg-white dark:bg-[#1A1C29]`)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
