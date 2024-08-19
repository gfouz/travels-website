//@ts-nocheck
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PostNavbar from '../../components/post/PostNavbar.tsx';
import { usePostListQuery } from '../../hooks/usePostListQuery.tsx';
import CommentsForm from '../../components/form/CommentsForm.tsx';
import DashboardButton from '../../components/buttons/DashboardButton.tsx';

export default function PostLayout() {
  const { slug } = useParams();
  const { posts } = usePostListQuery();
  const post = posts?.find((post) => post.slug === slug);
  const created_at = post?.created_at !== undefined ? post.created_at : '';
  const published = new Date(created_at).toDateString();

  return (
    <>
      {post && (
        <div className='mx-auto px-4 py-8'>
          <DashboardButton />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='md:col-span-2'>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h1 className='text-3xl sm:text-4xl font-bold mb-4'>
                  {post?.title}
                </h1>
                <p className='text-gray-700 mb-6'>{published}</p>
                <p className='text-gray-700 mb-6'>
                  {post?.categories.map((cat) => cat.name)}
                </p>
                <img
                  src='https://via.placeholder.com/800x400'
                  alt='Post Image'
                  className='mb-4 rounded-lg'
                />
                <ReactMarkdown
                  className='codes'
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <SyntaxHighlighter
                          {...props}
                          className='codes'
                          language='javascript'
                          PreTag='div'
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code {...props} className='overflow-x-auto codes'>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {post?.content}
                </ReactMarkdown>
              </div>
            </div>

            <div className='md:col-span-1'>
              <div className='relative bg-[#003249] rounded-lg shadow-md p-6 my-8'>
                <h2 className='text-white text-3xl sm:text-4xl font-bold mb-4'>
                  Learn more
                </h2>
                <PostNavbar />
                <hr className='my-4 bg-[#000000]' />
              </div>
              <CommentsForm background='#003249' />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

//https://www.w3.org/TR/wai-aria-1.2/#landmark_roles
