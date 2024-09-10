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
              className='flex flex-col items-center justify-center'
            >
              <h2 className='text-[8vw] uppercase text-white font-extrabold white-text-shadow'>
                travels
              </h2>
              
              <div className='mt-6'>
                <p className='text-gray-200 font-extrabold tracking-tight text-[2.7vw]'>
                  Welcome Passengers!
                </p>
              </div>
              
            </a>
            
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default Root;
