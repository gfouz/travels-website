import Layout from '../layout/DefaultLayout.tsx';
import TanStackTable from './tanstack-table/TanStackTable.tsx';

const Checkins = () => {
  return (
    <Layout model='Check-in'>
      <TanStackTable />
    </Layout>
  );
};

export default Checkins;
