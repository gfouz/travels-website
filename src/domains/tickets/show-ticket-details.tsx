import Layout from '../layout/DefaultLayout.tsx';
import TicketDetailsComponent from './TicketDetailsComponent.tsx';

const TicketDetailsPage = () => {
  return (
    <Layout model='Pasajes'>
      <TicketDetailsComponent />
    </Layout>
  );
};

export default TicketDetailsPage;
