import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | App prueba Luis',
        default: 'App prueba de Luis',
    },
    description: 'Esta es una aplicación web de prueba',
    metadataBase: new URL('https://proyecto-next-git-luisqa-luis-projects-d7ab4804.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
  );
}