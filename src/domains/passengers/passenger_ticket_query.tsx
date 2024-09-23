import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';

// Definir el esquema de validación con Zod
const schema = z.object({
  booking_code: z.string().nonempty('El código de reserva es obligatorio'),
  last_name: z.string().nonempty('El apellido es obligatorio'),
});

// Componente del formulario
const TicketForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Mover useQuery fuera de onSubmit
  const {
    data: ticket,
    error,
    isLoading,
    refetch,
  } = useQuery(
    ['ticket'],
    async ({ queryKey }) => {
      const [booking_code, last_name] = queryKey;
      const queryString = new URLSearchParams({
        booking_code,
        last_name,
      }).toString();
      const response = await fetch(`/tickets/?${queryString}`);
      if (!response.ok) {
        throw new Error('Error al buscar el ticket');
      }
      return response.json(); // Asumiendo que la respuesta es JSON
    },
    {
      enabled: false, // Deshabilitar la ejecución automática al principio
    },
  );

  const onSubmit = (data) => {
    // Refetch con los datos ingresados por el usuario
    refetch({
      queryKey: ['ticket', data.booking_code, data.last_name],
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='booking_code'>Código de Reserva:</label>
        <input id='booking_code' {...register('booking_code')} />
        {errors.booking_code && <p>{`${errors?.booking_code.message}`}</p>}
      </div>

      <div>
        <label htmlFor='last_name'>Apellido:</label>
        <input id='last_name' {...register('last_name')} />
        {errors.last_name && <p>{errors.last_name.message}</p>}
      </div>

      <button type='submit'>Buscar Ticket</button>

      {/* Mensajes de estado */}
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {ticket && <p>Ticket encontrado: {JSON.stringify(ticket)}</p>}
    </form>
  );
};

export default TicketForm;
