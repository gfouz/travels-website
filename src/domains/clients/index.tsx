import Layout from '../../components/layout/Layout.tsx';
import TanStackTable from './tanstack-table/TanStackTable.tsx';

const dashboardlinks = [
  '/',
  '/flight-schedule',
  '/checkin',
  '/tickets',
  '/signin',
];

const FlightsForClients = () => {
  return (
    <Layout links={dashboardlinks}>
      <section className='bg-sky-900 py-6'>
        <TanStackTable />
      </section>
    </Layout>
  );
};

export default FlightsForClients;
