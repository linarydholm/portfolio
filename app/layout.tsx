import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
// import { Footer } from './components/Footer';
import About from './components/About';
import { redHatRegular } from '@/fonts';

export const metadata: Metadata = {
  title: 'Local for now',
  description: 'Frontend developer in Stockholm',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={redHatRegular.className}>
      <body className="bg-dark-bg text-light overflow-y-scroll">
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
