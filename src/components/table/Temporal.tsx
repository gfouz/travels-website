//ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { usePostListQuery } from '../../hooks/usePostListQuery';
import { useMutationState } from '@tanstack/react-query';
import UpdateDeleteButton from '../buttons/UpdateDeleteButton.tsx';

const BootstrapTable = () => {
  const { posts, refetch } = usePostListQuery();
  const variables = useMutationState<string | unknown>({
    filters: { mutationKey: ['posts'], status: 'success' },
    select: (mutation) => mutation.state?.variables,
  });
  //@ts-ignore
  const title = variables[0]?.title;

  React.useEffect(() => {
    refetch();
  }, [title, posts]);

  return (
    <div className='overflow-x-auto'>
      <table className='max-w-[700px] divide-y divide-gray-200 shadow-md bg-white'>
        <thead className='bg-blue-500 text-white'>
          <tr>
            <th className='px-6 py-3 text-left font-semibold'>Title</th>
            <th className='px-6 py-3 text-left font-semibold'>Author</th>
            <th className='px-6 py-3 text-left font-semibold'>Date</th>
            <th className='px-6 py-3 text-left font-semibold'>Actions</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {posts?.map(
            (post: {
              id: string;
              title: string;
              slug: string;
              content: string;
              author: { username: string };
              created_at: string;
            }) => {
              return (
                <tr key={post?.id}>
                  <td className='px-6 py-4 whitespace-nowrap text-left'>
                    <Link
                      className='no-underline text-grey-400'
                      to={`/published/${post?.slug}`}
                    >
                      {post?.title}
                    </Link>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {post.author?.username}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {new Date(post?.created_at).toDateString()}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
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

export default BootstrapTable;
