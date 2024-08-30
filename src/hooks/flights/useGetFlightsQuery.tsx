import { useQuery } from '@tanstack/react-query';
import { getFlights } from '../../services/flights/getFlights.ts';
import { Flight } from '../../store/flightActions.ts';

export const useGetFlightsQuery = () => {
  const { isPending, isError, data, error, refetch } = useQuery<Flight[]>({
    queryKey: ['get-flights'],
    queryFn: getFlights,
    staleTime: Infinity, //los datos se consideran siempre frescos.
    cacheTime: 1000 * 60 * 60, //mantiene los datos en cache por una hora.
    refetchOnMount: false, // Evita refetch al montar el componente
    refetchOnWindowFocus: false, // Evita refetch cuando la ventana vuelve al foco
  });
  const flights = data?.map((flight) => flight);
  return { flights, error, isError, isPending, refetch };
};
