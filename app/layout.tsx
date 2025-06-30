import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/lib/providers';
import { Toaster } from 'sonner';
import { Lato } from 'next/font/google';

export const metadata: Metadata = {
  title: 'XanoPay Private Sale',
  description: 'XanoPay Private Sale',
};

export const latoFont = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={``}>
      <body className={` antialiased`}>
        <Providers>{children}</Providers>
        <Toaster theme="dark" position="top-center" />
      </body>
    </html>
  );
}

// ${jafBerninaSansNarrow.className}
