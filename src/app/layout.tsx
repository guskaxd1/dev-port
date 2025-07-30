//src/app/layout.tsx
import type { Metadata } from 'next';
import Header from '../components/header';
import Footer from '../components/footer';
import './globals.css';
import { LanguageProvider } from '../components/languageContext';

export const metadata: Metadata = {
  title: 'Guskov - Portfólio',
  description: 'Portfólio de desenvolvedor frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}