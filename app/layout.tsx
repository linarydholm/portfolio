import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
// import { Footer } from './components/Footer';
import About from './components/About';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lina Rydholm',
  description: 'Frontend developer in Stockholm',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const myClass = `bg-dark-bg text-light ${inter.className} overflow-y-scroll`;

  return (
    <html lang="en">
      <body className={myClass}>
        {/* 
        text-dark: sets text color on Banner, Header and About

        gradient are controlled by: bg-dark, bg-gradient-to-b, from transparent, to-light 
        */}
        <div className="bg-dark-bg bg-gradient-to-b from-primary to-transparent">
          <Banner />
          <Header />
          <About />
        </div>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
