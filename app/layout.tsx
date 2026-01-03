import "./globals.css";

export const metadata = {
  title: "Kawthar Jeddi | Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
