import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lina Rydholm',
  description: 'Frontend developer in Stockholm',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const myClass = `bg-dark text-light ${inter.className} overflow-y-scroll`;

  return (
    <html lang="en">
      <body className={myClass}>
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
