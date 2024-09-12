import React from 'react';
import Navbar from '../../components/navbar/NextNavbar.tsx';
import Footer from '../../components/footer/Footer.tsx';

interface LayoutProps {
  links: string[];
  children: React.ReactNode;
}

const defaultlinks = ['/', '/login', '/register'];

const Layout = ({ links = defaultlinks, children }: LayoutProps) => {
  return (
    <section className='h-full w-full'>
      <header className='sticky top-0 left-0 z-30'>
        <Navbar links={links} />
      </header>
      <article className='mx-auto'>{children}</article>
      <Footer />
    </section>
  );
};

export default Layout;
