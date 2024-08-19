//@ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { usePostListQuery } from '../../hooks/usePostListQuery';
import { useMutationState } from '@tanstack/react-query';
import UpdateDeleteButton from '../buttons/UpdateDeleteButton.tsx';

const ReasponsiveTable = () => {
  const { posts, refetch } = usePostListQuery();
  const data = useMutationState<string | unknown>({
    filters: { mutationKey: ['posts'], status: 'success' },
    select: (mutation) => mutation.state?.data,
  });

  React.useEffect(() => {
    refetch();
  }, [posts]);

  return (
    <div className='p-4 rounded-lg bg-gray-300 h-[fit-content] w-[fit-content]'>
      <table className='border-separate border-spacing-y-2 text-sm'>
        <thead className='text-left'>
          <tr className=''>
            <th className='th-class px-3 rounded-l-lg'>Title</th>
            <th className='th-class px-6 rounded-r-lg'>Actions</th>
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
                <tr className=' ' key={post?.id}>
                  <td className='td-class bg-gray-700 text-xs rounded-l-lg'>
                    <Link
                      className='no-underline  text-xs text-white tracking-wide'
                      to={`/published/${post?.slug}`}
                    >
                      {post?.title}
                    </Link>
                  </td>
                  <td className='td-class bg-cyan-800 rounded-r-lg'>
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

export default ReasponsiveTable;
