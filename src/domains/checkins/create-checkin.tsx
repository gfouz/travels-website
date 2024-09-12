import Layout from '../layout/DefaultLayout.tsx';
import CreateCheckinForm from './CreateCheckinForm.tsx';

const CreateCheckinPage = () => {
  return (
    <Layout model='Check-in'>
      <CreateCheckinForm />
    </Layout>
  );
};

export default CreateCheckinPage;
