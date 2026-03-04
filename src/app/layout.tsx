import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayur Upadhayay - Portfolio",
  description: "Senior Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
