import Layout from '../components/layout/Layout.tsx';

const dashboardlinks = [
  '/',
  '/flight-schedule',
  '/checkin',
  '/tickets',
  '/signin',
];

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
              className='w-full mt-[10%] ml-6  pt-20'
            >
              <h2 className='text-[6vw] uppercase text-teal-700 font-extrabold'>
                Welcome!
              </h2>
              <h3 className='text-[2.5vw] text-gray-700 tracking-wider m-0 md:mt-6'>
                Time to travel
              </h3>
            </a>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default Root;
