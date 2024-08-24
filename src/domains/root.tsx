import Layout from '../components/layout/Layout.tsx';

const links = [
  '/',
  '/login',
  '/register',
];

const Root = () => {
  return (
    <Layout links={links}>
      <main className='py-40 flex items-center justify-center bg-sky-400'>
         <h1 className='text-[8vw] text-sky-900 font-extrabold'>Homepage</h1>
      </main>
    </Layout>
  );
};

export default Root;
