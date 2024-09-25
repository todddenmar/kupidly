import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kupidly',
  description: 'Create your AI clone in 5 minutes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black text-white flex flex-col font-dmsans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
