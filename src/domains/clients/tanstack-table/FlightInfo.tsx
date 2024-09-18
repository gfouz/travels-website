import { Flight } from '../../../flights.types.ts';

type FlightInfoProps = {
  flight: Flight;
}

 export default function FlightInfo( { flight }: FlightInfoProps){
      const {connected_flight } = flight;
    return(
     <article className='modal-text-size'> 
      <section className='mb-8  p-6 border border-gray-300 rounded-lg shadow-lg'>
        
        <p className='text-gray-600'>
          <strong>ID del Vuelo:</strong> {flight.id}
        </p>
        <p className='text-gray-600'>
          <strong>Rol:</strong> {flight.role}
        </p>
        <p className='text-gray-600'>
          <strong>Lugar de Salida:</strong> {flight.departure_place}
        </p>
        <p className='text-gray-600'>
          <strong>Lugar de Llegada:</strong> {flight.arrival_place}
        </p>
        <p className='text-gray-600'>
          <strong>Número de Vuelo:</strong> {flight.flight_number}
        </p>
        <p className='text-gray-600'>
          <strong>Hora de Salida:</strong> {flight.departure_time}
        </p>
        <p className='text-gray-600'>
          <strong>Hora de Llegada:</strong> {flight.arrival_time}
        </p>
        <p className='text-gray-600'>
          <strong>Fecha de Salida:</strong>{' '}
          {new Date(flight.departure_date).toLocaleString()}
        </p>
        <p className='text-gray-600'>
          <strong>Equipaje Permitido:</strong> {flight.luggage} kg
        </p>
        <p className='text-gray-600'>
          <strong>Estado:</strong> {flight.status}
        </p>
      </section>
       {connected_flight && connected_flight.length > 0 && (
        <section className='mb-8 p-6 border border-gray-300 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
            Vuelos Conectados
          </h2>
          {connected_flight.map(
            (cf: FlightConnected, index: Key | null | undefined) => (
              <div key={index} className='mb-4 p-4 bg-gray-50'>
                <p className='text-gray-600'>
                  <strong>Número de Vuelo:</strong> {cf.flight_number}
                </p>
                <p className='text-gray-600'>
                  <strong>Lugar de Salida:</strong> {cf.departure_place}
                </p>
                <p className='text-gray-600'>
                  <strong>Lugar de Llegada:</strong> {cf.arrival_place}
                </p>
                <p className='text-gray-600'>
                  <strong>Hora de Salida:</strong> {cf.departure_time}
                </p>
                <p className='text-gray-600'>
                  <strong>Hora de Llegada:</strong> {cf.arrival_time}
                </p>
                <p className='text-gray-600'>
                  <strong>Fecha de Salida:</strong>{' '}
                  {new Date(cf.departure_date).toLocaleString()}
                </p>
              </div>
            ),
          )}
        </section>
      )}

     </article> 

       )
       }
