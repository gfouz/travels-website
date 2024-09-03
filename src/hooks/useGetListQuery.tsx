import { useQuery } from '@tanstack/react-query';
import { Flight } from '../flights.types.ts';
import { Ticket } from '../tickets.types.ts';
import { GetListFunction } from '../interfaces.types.ts';

type ListItem = Flight | Ticket;

export const useGetListQuery = ( queryFunction: GetListFunction, url: string,  queryKey : string[]) => {
  const { isPending, isError, data, error, refetch } = useQuery<Flight[] | Ticket[]>({
    queryKey: [queryKey],
    queryFn: ()=> queryFunction( url ),
    refetchOnMount: false, // Evita refetch al montar el componente
    refetchOnWindowFocus: true, // Evita refetch cuando la ventana vuelve al foco
  });
  const payload = data?.map((item: ListItem) => item);
  return { payload, error, isError, isPending, refetch };
};
