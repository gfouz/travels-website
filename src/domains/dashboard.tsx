import Layout from '../components/layout/Layout.tsx';

const dashboardlinks = ['/', '/flights', '/checkin', '/tickets', '/settings'];

const Dashboard = () => {
  return (
    <Layout links={dashboardlinks}>
      <main className='p-28 flex items-center justify-center'>
        <h1 className='text-[8vw]'>Dashboard</h1>
      </main>
    </Layout>
  );
};

export default Dashboard;
