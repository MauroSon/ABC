import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABC E-commerce",
  description: "Loja virtual ABC - E-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
