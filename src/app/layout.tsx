import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stake - High-Growth Property Investments",
  description: "Join the CEG Equity Token batch. Start building your portfolio with fractional ownership of global assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
