//@ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { usePostListQuery } from '../../hooks/usePostListQuery';
import { useMutationState } from '@tanstack/react-query';
import UpdateDeleteButton from '../buttons/UpdateDeleteButton.tsx';

const Table = () => {
  const { posts, refetch } = usePostListQuery();
  const data = useMutationState<string | unknown>({
    filters: { mutationKey: ['posts'], status: 'success' },
    select: (mutation) => mutation.state?.data,
  });

  React.useEffect(() => {
    refetch();
  }, [posts]);
  //console.log(data);
  return (
    <div className='relative mx-auto h-[fit-content] overflow-x-auto max-w-md  shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Title
            </th>

            <th scope='col' className='px-6 py-3'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {posts?.map(
            (post: {
              id: number;
              title: string;
              slug: string;
              content: string;
              author: { username: string };
              created_at: string;
            }) => {
              return (
                <tr
                  key={post?.id}
                  className='bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600'
                >
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    <Link
                      className='no-underline text-xs text-yellow-300'
                      to={`/published/${post?.slug}`}
                    >
                      {post?.title}
                    </Link>
                  </th>

                  <td className=''>
                    <UpdateDeleteButton postId={post?.id} post={post} />
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
