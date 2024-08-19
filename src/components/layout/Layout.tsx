import React from 'react';
import Navbar from '../../components/navbar/NextNavbar.tsx';
import Footer from '../../components/footer/Footer.tsx';

interface LayoutProps {
  styles?: string;
  children: React.ReactNode;
}

const links = [
  '/',
  '/login',
  '/register',
  '/users',
  '/tickets',
  '/checkin',
  '/settings'
];

const Layout = ({ styles, children }: LayoutProps) => {
  return (
    <section className={`dark h-full w-full ${styles}`}>
      <header className='sticky top-0 left-0 z-30'>
        <Navbar links={links} />
      </header>
      <article className='mx-auto'>{children}</article>
      <Footer styles={styles} />
    </section>
  );
};

export default Layout;
