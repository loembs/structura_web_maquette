import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "STRUCTURA — L'Art de la Finition Parfaite",
  description: "STRUCTURA · Revêtements architecturaux, peinture professionnelle et finitions haut de gamme en Mauritanie et au Sénégal.",
  openGraph: {
    title: "STRUCTURA — L'Art de la Finition Parfaite",
    description: "Revêtements architecturaux, béton ciré, façades et expertise Fosroc.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
