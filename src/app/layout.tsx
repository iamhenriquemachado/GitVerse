import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"], // optional, depending on your usage
});


export const metadata: Metadata = {
  title: "GitVerse — Become a Git Astronaut",
  description: "Explore the galaxy of version control. Learn Git & GitHub the fun way with hands-on missions, beginner-friendly guides, and stellar skills.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
