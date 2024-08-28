import { useQuery } from '@tanstack/react-query';
import { getFlights } from '../../services/flights/getFlights.ts';
import { Flight } from '../../store/flightActions.ts';

export const useGetFlightsQuery = () => {
  const { isPending, isError, data, error, refetch } = useQuery<Flight[]>({
    queryKey: ['get-flights'],
    queryFn: getFlights,
  });
  const flights = data?.map((flight) => flight);
  return { flights, error, isError, isPending, refetch };
};
