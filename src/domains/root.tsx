import Layout from './layout/DefaultLayout.tsx';

const links = ['/', '/login', '/register'];

const Root = () => {
  return (
    <Layout>
      <h1 className='font-extrabold text-[5vw]'>DASHBOARD</h1>
    </Layout>
  );
};

export default Root;
