export const metadata = {
  title: "Weather App",
  description: "Consulta de clima para produtores rurais",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
