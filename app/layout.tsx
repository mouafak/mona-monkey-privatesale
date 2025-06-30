import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/lib/providers';
import { Toaster } from 'sonner';
import { jafBerninaSansNarrow } from './fonts';

export const metadata: Metadata = {
  title: 'XanoPay Private Sale',
  description: 'XanoPay Private Sale',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jafBerninaSansNarrow.className}`}>
      <body className={` antialiased`}>
        <Providers>{children}</Providers>
        <Toaster theme="dark" position="top-center" />
      </body>
    </html>
  );
}
