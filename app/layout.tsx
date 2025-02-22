import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBM_PLEX = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600','700'],
  variable: '--font-ibm-plex'
})

export const metadata: Metadata = {
  title: "AI PHOTO EDITING TOOL",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: 'red'}
    }}>
      <html lang="en">
        <body
          className={cn("font-IBMPlex antialiased)", IBM_PLEX.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
