import { useNavigate } from 'react-router-dom';
import { Post } from '../../store/actions.ts';
import { usePostStore } from '../../store/store.ts';

interface EditButtonProps {
  post: Post;
}

const EditButton = ({ post }: EditButtonProps) => {
  const navigate = useNavigate();
  const dispatch = usePostStore((state) => state.dispatch);

  function setState() {
    dispatch({ type: 'SET_POST', payload: post });
    return true;
  }

  return (
    <button
      onClick={() => {
        setState();
        navigate('/update/post');
      }}
      type='button'
      className='text-gray-100'
    >
      <svg
        className='w-4 h-4 mr-2 hover:bg-gray-500'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        aria-hidden='true'
      >
        <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
        />
      </svg>
    </button>
  );
};
export default EditButton;
