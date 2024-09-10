import React from 'react'
import Layout from '../layout/DefaultLayout.tsx';
import TanStackTable from './tanstack-table/TanStackTable.tsx';

const Tickets = () => {
  return (
    <Layout>
      <TanStackTable />
    </Layout>
  );
};

export default Tickets;
