import { useGetFlightsQuery } from '../../hooks/flights/useGetFlightsQuery.tsx';
import FlightTableRow from './FlightTableRow.tsx';

const FlightTable = () => {
  const { flights } = useGetFlightsQuery();
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-200'>
        <thead>
          <tr className='w-full uppercase dark:bg-boxdark font-extrabold tracking-tight text-sm border-b border-gray-200 hover:bg-gray-700'>
            <th className='py-3 px-6 text-left'>Fecha de Vuelo</th>
            <th className='py-3 px-6 text-left'>Desde</th>
            <th className='py-3 px-6 text-left'>Hasta</th>
            <th className='py-3 px-6 text-left'>Horario</th>
            <th className='py-3 px-6 text-left text-center'>Administrar</th>
          </tr>
        </thead>
        <tbody className='text-gray-600 text-sm font-light'>
          {flights?.map((flight) => <FlightTableRow flight={flight} />)}
        </tbody>
      </table>
    </div>
  );
};

export default FlightTable;
