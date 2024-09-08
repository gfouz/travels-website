import Layout from '../components/layout/Layout.tsx';

const dashboardlinks = ['/', '/flights', '/checkin', '/tickets', '/signin'];

const Root = () => {
  return (
    <Layout links={dashboardlinks}>
      <main className='p-28 flex items-center justify-center'>
        <h1 className='text-[8vw]'>Homepage</h1>
      </main>
    </Layout>
  );
};

export default Root;
