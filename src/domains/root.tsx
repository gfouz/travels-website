import Layout from '../components/layout/Layout.tsx';

const dashboardlinks = ['/', '/flights', '/checkin', '/tickets', '/signin'];

const Root = () => {
  return (
    <Layout links={dashboardlinks}>
      <main className='flex items-center justify-center'>
        <section className='w-full relative shadow shadow-2xl'>
          <img
            className='max-w-[100%] h-auto'
            src='images/space.jpg'
            alt='woman on laptop'
          />
          <section className='absolute top-0 flex px-8 justify-center left-0 w-full h-full'>
            <a
              href='https://github.com/gfouz'
              className='w-full flex flex-col pt-20'
            >
              <h2 className='text-[7vw] sr-only uppercase text-white font-extrabold white-text-shadow'>
                travels
              </h2>
            </a>
            
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default Root;
