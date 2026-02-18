import "./globals.css";

export const metadata = {
  title: "Nicolas Bregevin – Développeur Web Freelance",
  description: "Création de sites web modernes, rapides et efficaces",
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
