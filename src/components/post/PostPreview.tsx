import { useQuery } from '@tanstack/react-query';
import { get_posts } from '../../services/getPostList';
import PostCard from './PostCard';

const PostPreview = () => {
  const query = useQuery({ queryKey: ['posts-list'], queryFn: get_posts });
  return (
    <ul className='grid-post-card gap-8 justify-center'>
      {query.data?.map((post: any) => (
        <li className='list-none' key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostPreview;
