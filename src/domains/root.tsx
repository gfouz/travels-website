import Layout from './layout/DefaultLayout.tsx';

//const links = ['/', '/login', '/register'];

const Root = () => {
  return (
    <Layout>
      <section className='flex justify-center pt-25'>
        <h1 className='font-extrabold text-[5vw]'>DASHBOARD</h1>
      </section>
    </Layout>
  );
};

export default Root;
