import React from 'react'
import Layout from '../layout/DefaultLayout.tsx';
import TanStackTable from './tanstack-table/TanStackTable.tsx';

const Flights = () => {
  const[model, setModel]= React.useState('');
  return (
    <Layout model={model} >
      <TanStackTable setModel= {setModel} />
    </Layout>
  );
};

export default Flights;
