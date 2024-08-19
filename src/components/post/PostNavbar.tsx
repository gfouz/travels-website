import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { usePostListQuery } from '../../hooks/usePostListQuery.tsx';

export default function PostNavbar() {
  const { slug } = useParams();
  const { posts } = usePostListQuery();
  return (
    <div className=''>
      <ul className='grid'>
        {posts ? (
          posts.map((post) => (
            <li
              className={post.slug === slug ? 'row-start-1' : ''}
              key={post.id}
            >
              <Link
                to={`/published/${post.slug}`}
                className={
                  post.slug === slug
                    ? 'text-green-400 font-bold'
                    : 'text-gray-400 underline'
                }
              >
                {post.title}
              </Link>
            </li>
          ))
        ) : (
          <p className='text-red-500'>
            It seems there is not Internet connexion!
          </p>
        )}
      </ul>
    </div>
  );
}
