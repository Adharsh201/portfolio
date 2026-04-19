import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adharsh Donthagani — QA Engineer",
  description: "Portfolio of Adharsh Donthagani — Testing Engineer specializing in Manual, Automation & Performance Testing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
