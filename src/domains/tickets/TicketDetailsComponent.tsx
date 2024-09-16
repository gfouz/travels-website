import { useLocation } from "react-router-dom";
import { FlightConnected } from "../../tickets.types";
import { Key } from "react";



const TicketDetails = () => {
  const location = useLocation();
  const data = location.state;

  const {
    ticket_issuer,
    flight,
    id,
    status,
    airline,
    booking_code,
    price,
    description,
    created_at,
  } = data;
  const { connected_flight } = flight;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Detalles del Pasaje</h1>

      {/* Ticket Issuer Section */}
      <section className="mb-8  p-6 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Emisor del Ticket</h2>
        <p className="text-gray-600"><strong>ID:</strong> {ticket_issuer.id}</p>
        <p className="text-gray-600"><strong>Nombre de Usuario:</strong> {ticket_issuer.username}</p>
      </section>

      {/* Flight Section */}
      <section className="mb-8  p-6 border border-gray-300 rounded-lgshadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Detalles del Vuelo</h2>
        <p className="text-gray-600"><strong>ID del Vuelo:</strong> {flight.id}</p>
        <p className="text-gray-600"><strong>Rol:</strong> {flight.role}</p>
        <p className="text-gray-600"><strong>Lugar de Salida:</strong> {flight.departure_place}</p>
        <p className="text-gray-600"><strong>Lugar de Llegada:</strong> {flight.arrival_place}</p>
        <p className="text-gray-600"><strong>Número de Vuelo:</strong> {flight.flight_number}</p>
        <p className="text-gray-600"><strong>Hora de Salida:</strong> {flight.departure_time}</p>
        <p className="text-gray-600"><strong>Hora de Llegada:</strong> {flight.arrival_time}</p>
        <p className="text-gray-600"><strong>Fecha de Salida:</strong> {new Date(flight.departure_date).toLocaleString()}</p>
        <p className="text-gray-600"><strong>Equipaje Permitido:</strong> {flight.luggage} kg</p>
        <p className="text-gray-600"><strong>Estado:</strong> {flight.status}</p>
      </section>

      {/* Connected Flights Section */}
      {connected_flight && connected_flight.length > 0 && (
        <section className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Vuelos Conectados</h2>
          {connected_flight.map((cf: FlightConnected, index: Key | null | undefined) => (
            <div key={index} className="mb-4 p-4 bg-gray-50">
              <p className="text-gray-600"><strong>Número de Vuelo:</strong> {cf.flight_number}</p>
              <p className="text-gray-600"><strong>Lugar de Salida:</strong> {cf.departure_place}</p>
              <p className="text-gray-600"><strong>Lugar de Llegada:</strong> {cf.arrival_place}</p>
              <p className="text-gray-600"><strong>Hora de Salida:</strong> {cf.departure_time}</p>
              <p className="text-gray-600"><strong>Hora de Llegada:</strong> {cf.arrival_time}</p>
              <p className="text-gray-600"><strong>Fecha de Salida:</strong> {new Date(cf.departure_date).toLocaleString()}</p>
            </div>
          ))}
        </section>
      )}

      {/* Ticket Details Section */}
      <section className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Detalles del Pasaje</h2>
        <p className="text-gray-600"><strong>ID:</strong> {id}</p>
        <p className="text-gray-600"><strong>Estado:</strong> {status}</p>
        <p className="text-gray-600"><strong>Aerolínea:</strong> {airline}</p>
        <p className="text-gray-600"><strong>Código de Reserva:</strong> {booking_code}</p>
        <p className="text-gray-600"><strong>Precio:</strong> {price}</p>
        <p className="text-gray-600"><strong>Descripción:</strong> {description}</p>
        <p><strong>Creado En:</strong> {new Date(created_at).toLocaleString()}</p>
      </section>
    </div>
  );
};

export default TicketDetails;
