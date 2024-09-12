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
  });
  const payload = data?.map((item: GenericObject) => item);
  return { payload, error, isError, isPending, refetch };
};
