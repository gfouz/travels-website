import React from 'react';
import EditButton from './EditButton.tsx';
import DeleteButton from './DeleteButton.tsx';
import DeleteWarning from './DeleteWarning.tsx';
import { Post } from '../../store/actions.ts';

interface CrudButtonProps {
  postId: string;
  post: Post;
}

const UpdateDeleteButton = ({ postId, post }: CrudButtonProps) => {
  const [isDelete, setIsDelete] = React.useState(false);

  return (
    <div className=''>
      <div className='flex justify-evenly p-1 px-2 border rounded-xl'>
        <EditButton post={post} />

        {isDelete === true ? (
          <DeleteWarning postId={postId} />
        ) : (
          <DeleteButton setIsDelete={setIsDelete} />
        )}
      </div>
    </div>
  );
};
export default UpdateDeleteButton;
