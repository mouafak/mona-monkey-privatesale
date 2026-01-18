import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/lib/providers';
import { Toaster } from 'sonner';
import { PlaypenSans } from './fonts';

export const metadata: Metadata = {
  title: 'Mona Monkey Private Sale',
  description: 'Mona Monkey Private Sale',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${PlaypenSans.className}`}>
      <body className={` antialiased`}>
        <Providers>{children}</Providers>
        <Toaster theme="light" position="top-center" />
      </body>
    </html>
  );
}
