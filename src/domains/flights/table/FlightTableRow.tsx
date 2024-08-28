import Modal from './Modal.tsx';
import { Flight } from '../../store/flightActions.ts';

interface IFlightTableRow {
  flight: Flight;
}

export default function FlightTableRow({ flight }: IFlightTableRow) {
  return (
    <tr
      key={flight.flight_id}
      className='dark:bg-boxdark whitespace-nowrap border-b border-gray-200 hover:bg-gray-600'
    >
      <td className='py-3 px-6 font-extrabold '>{flight.departure_date}</td>
      <td className='py-3 px-6'>{flight.departure_place}</td>
      <td className='py-3 px-6'>{flight.arrival_place}</td>
      <td className='py-3 px-6'>{flight.departure_time}</td>
      <td className='py-3 px-6'>
        <Modal payload={flight} />
      </td>
    </tr>
  );
}
