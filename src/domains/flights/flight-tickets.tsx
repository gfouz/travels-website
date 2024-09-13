import Layout from '../layout/DefaultLayout.tsx';
import TanStackTable from '../tickets/tanstack-table/TanStackTable.tsx';
import { useLocation } from "react-router-dom";


const FlightTickets = () => {
  const location = useLocation();
  const data = location.state;
  const tickets = data?.tickets.map( item => item);
  return (
    <Layout model='Pasajes por Vuelos' >
      <TanStackTable payload={tickets} />
    </Layout>
  );
};

export default FlightTickets;
