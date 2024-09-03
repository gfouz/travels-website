import { useMutation, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export type FetchFunction = (url: string, token?: string) => Promise<any>;

export const useDeleteMutation = (
  fetchApi: FetchFunction,
  url: string,
  token?: string
) => {
  const mutation = useMutation({
    mutationFn: () => {
      return fetchApi(url, token);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['get-flights'] });
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ['get-flights'] }),
    mutationKey: ['create-flight'],
    onError: (error) => {
      //console.error('Error al eliminar el registro:', error);
      return error;
    },
  });
  return { mutation };
};
