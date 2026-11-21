import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amy Beatriz Mendoza | Portafolio",
  description: "Portafolio académico y profesional de Amy Beatriz Mendoza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
