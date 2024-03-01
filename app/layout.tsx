import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';

import Nav from './components/Nav';
import About from './pageComponents/About';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lina Rydholm',
  description: 'Frontend developer in Stockholm',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-4 md:px-12">
          <Header />
          <About />
          {children}
        </div>
      </body>
    </html>
  );
}
