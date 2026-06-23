import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Studio Pixel — Sites Web qui font grandir votre commerce',
  description:
    'Studio Pixel crée des sites web professionnels et performants pour les entreprises locales. Design premium, SEO local, maintenance mensuelle.',
  keywords: 'création site web, agence web, SEO local, design, développement web, Québec',
  openGraph: {
    title: 'Studio Pixel — Agence Web Premium',
    description: 'Des sites web qui font grandir votre commerce.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
