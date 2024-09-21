import Layout from '../components/layout/Layout.tsx';

const links = [
  '/',
  '/vuelos',
  '/pasajes',
  '/signin',
];

const Root = () => {
  return (
    <Layout links={ links }>
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
              <h2 className='sr-only text-[6vw] uppercase text-teal-700 font-extrabold'>
                Welcome!
              </h2>
              <h3 className='sr-only text-[2.5vw] text-gray-700 tracking-wider m-0 md:mt-6'>
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
