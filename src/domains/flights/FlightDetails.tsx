import { useFlightStore } from '../../store/flightstore.ts';

const FlightDetails = () => {
  const { flight } = useFlightStore((state) => state);

  const formatPrice = ( price: string | number | undefined ) => {
    return price === 0.0 ? 'Incluido' : `$${price}`;
  };
  return (
    <div className='max-w-4xl mx-auto p-6  rounded-lg shadow-lg'>
      <h2 className='text-2xl font-semibold mb-4'>Detalles del Vuelo</h2>

      {/* Sección de vuelo principal */}
      <div className='mb-6 border-b pb-4'>
        <h3 className='text-xl font-bold'>Vuelo Principal</h3>
        <p>
          <strong>Número de vuelo:</strong> {flight.flight_number}
        </p>
        <p>
          <strong>Salida desde:</strong> {flight.departure_place}
        </p>
        <p>
          <strong>Destino:</strong> {flight.arrival_place}
        </p>
        <p>
          <strong>Fecha de salida:</strong> {flight.departure_date}{' '}
          <strong>Hora de salida:</strong>{flight.departure_time}
        </p>
        <p>
          <strong>Hora de llegada:</strong> {flight.arrival_time}{' '}
        </p>
        <p>
          <strong>Equipaje permitido:</strong> {flight.luggage} kg
        </p>
        <p>
          <strong>Precio Adulto:</strong> {formatPrice(flight.adult_price)}
        </p>
        <p>
          <strong>Precio Niño:</strong> {formatPrice(flight.child_price)}
        </p>
        <p>
          <strong>Precio Infante:</strong> {formatPrice(flight.infant_price)}
        </p>
      </div>

      {/* Sección de vuelo conectado */}
      {flight.connected_flight && flight.connected_flight.length > 0 && (
        <div>
          <h3 className='text-xl font-bold'>Vuelo Conectado</h3>
          {flight.connected_flight.map((connectedFlight, index) => (
            <div key={index} className='mb-4 border-b pb-3'>
              <p>
                <strong>Número de vuelo:</strong>{' '}
                {connectedFlight.flight_number}
              </p>
              <p>
                <strong>Salida desde:</strong> {connectedFlight.departure_place}
              </p>
              <p>
                <strong>Destino:</strong> {connectedFlight.arrival_place}
              </p>
              <p>
                <strong>Fecha y hora de salida:</strong>{' '}
                {connectedFlight.departure_date}{' '}
                {connectedFlight.departure_time}
              </p>
              <p>
                <strong>Hora de llegada:</strong> {connectedFlight.arrival_time}
              </p>
              <p>
                <strong>Equipaje permitido:</strong> {connectedFlight.luggage}{' '}
                kg
              </p>
              <p>
                <strong>Precio Adulto:</strong>{' '}
                {formatPrice(connectedFlight.adult_price)}
              </p>
              <p>
                <strong>Precio Niño:</strong>{' '}
                {formatPrice(connectedFlight.child_price)}
              </p>
              <p>
                <strong>Precio Infante:</strong>{' '}
                {formatPrice(connectedFlight.infant_price)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightDetails;
