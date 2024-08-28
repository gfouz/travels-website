import React from 'react';
import Navbar from '../../components/navbar/NextNavbar.tsx';
import Footer from '../../components/footer/Footer.tsx';

interface LayoutProps {
  styles?: string;
  links: string[];
  children: React.ReactNode;
}

const defaultlinks = ['/', '/login', '/register'];

const Layout = ({ styles, links = defaultlinks, children }: LayoutProps) => {
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
