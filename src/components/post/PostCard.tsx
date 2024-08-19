import { Link } from 'react-router-dom';

interface User {
  username: string;
}

interface PostProps {
  title: string;
  slug: string;
  author: User;
  created_at: string;
}
interface IPost {
  post: PostProps;
}
const PostCard = ({ post }: IPost) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden pb-6'>
      <img
        src='images/blog.jpg'
        alt='Post'
        className='w-full h-40 object-cover'
      />
      <div className='p-4'>
        <h3 className='text-lg font-semibold mt-2'>{post?.title}</h3>
        <p className='text-gray-600 m-0'>by: {post?.author?.username}</p>
        <p className='text-gray-600 m-0 mb-6'>
          {new Date(post?.created_at).toDateString()}
        </p>
        <Link
          className='no-underline bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
          to={`/published/${post?.slug}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

/*const PostCard = ({ title }:{title:string}) => {
  return (
    <div className='max-w-xl w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto mb-6'>
      <div className='p-6'>
        <h2 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h2>
       
      </div>
    </div>
  );
};
export default PostCard;*/
