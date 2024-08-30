import { useMutation, QueryClient } from '@tanstack/react-query';
import { Flight } from '../../store/flightActions.ts';

const queryClient = new QueryClient();

export const useAcyncMutation = (
  fetchApi: (arg0: Flight) => Promise<unknown>,
) => {
  const mutation = useMutation({
    mutationFn: (data: Flight) => {
      return fetchApi(data);
    },
    /*onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['get-flights'] });
    },*/
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ['get-flights'] }),
    mutationKey: ['get-flights'],
  });
  return { mutation };
};
