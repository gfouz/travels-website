import { useQuery } from '@tanstack/react-query';
import { GenericObject, GetListFunction } from './hooks.types.ts';

export const useGetListQuery = (
  queryFunction: GetListFunction,
  url: string,
  queryKey: string[],
) => {
  const { isPending, isError, data, error, refetch } = useQuery<
    GenericObject[]
  >({
    queryKey: [queryKey],
    queryFn: () => queryFunction(url),
    refetchOnMount: false, // Evita refetch al montar el componente
    refetchOnWindowFocus: true, // Evita refetch cuando la ventana vuelve al foco
    staleTime: Infinity,
  });
  const payload = data?.map((item: GenericObject) => item);
  return { payload, error, isError, isPending, refetch };
};
