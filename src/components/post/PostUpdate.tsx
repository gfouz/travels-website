import { SubmitHandler, useForm } from 'react-hook-form';
//import { zodResolver } from '@hookform/resolvers/zod';
import { useUserStore } from '../../store/userstore.ts';
import { useCategoriesQuery } from '../../hooks/useCategoriesQuery.tsx';
//import { PostSchema, Post } from '../../schemas/post.schema';
import { postUpdateService } from '../../services/postUpdateService.ts';
import { useMutationPostUpdate } from '../../hooks/useMutationPostUpdate.tsx';
import { usePostStore } from '../../store/store.ts';
import SignInButton from '../../components/buttons/SignInButton.tsx';
import SubmitButton from '../../components/buttons/SubmitButton.tsx';
import Input from './Input.tsx';
//import Textarea from '../textarea/TextArea.tsx';
import { Select , SelectItem } from '@nextui-org/select';
import { Textarea  } from '@nextui-org/input';
import { Post } from '../../schemas/post.schema.ts';



export default function PostUpdate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>( /* {
    resolver: zodResolver(PostSchema),
  } */ );
  const user = useUserStore((state) => state.user);
  const post = usePostStore((state) => state.post);
  const { categories } = useCategoriesQuery();
  const url = `http://127.0.0.1:8000/api/posts/update/post/${post.id}`;
  const { mutation } = useMutationPostUpdate(
    postUpdateService,
    url,
    user?.token,
  );

  const defaultCategories = [
    { id: 1, name: 'science' },
    { id: 2, name: 'technology' },
    { id: 3, name: 'python' },
  ];
  
  const onSubmit: SubmitHandler<Post> = async (data: Post) => {
    /*const newCategories = data?.categories.split(',').map(Number)
    const newData = data;
    newData.categories = newCategories;*/
    await mutation.mutateAsync(data);
  };

  return (
    <section className='py-16 bg-gray-300 flex flex-col items-center md:flex-row justify-evenly md:items-start'>
      <div className='mb-4 bg-purple-950 p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-yellow-500 text-3xl font-extrabold tracking-tight mb-10 text-center'>
          Update Post
        </h2>
        <form
          className='max-w-md mx-auto text-slate-800'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            defaultValue={user?.user_id}
            type='hidden'
            {...register('author_id')}
          />
          <div className='mb-4'>
            <Input
              color='primary'
              label='title'
              errors={errors}
              register={register}
              defaultValue={post?.title}
              placeholder='Choose a title'
            />
          </div>

          <div className='py-4 text-slate-900'>
            <Select
              color='primary'
              label='Select one or more categories'
              {...register('categories')}
              variant='underlined'
              className='max-w-xs'
              selectionMode='multiple'
              placeholder='Select one or several Categories'
              isInvalid={errors?.categories?.message ? true : false}
              errorMessage={`${errors?.categories?.message}`}
              classNames={{
                label: '!text-violet-100 text-md capitalize font-black',
                value: '!text-violet-100 text-md',
              }}
            >
              {categories
                ? categories.map((category) => (
                    <SelectItem key={category.id}>
                      {category?.name}
                    </SelectItem>
                  ))
                : defaultCategories.map((category) => (
                    <SelectItem key={category.id}>
                      {category?.name}
                    </SelectItem>
                  ))}
            </Select>
          </div>

          <div className='my-4'>
            <Textarea
              color='primary'
              maxRows={10}
              label='Content'
              variant='underlined'
              labelPlacement='outside'
              {...register('content')}
              placeholder='Enter your Content'
              classNames={{
                input: '!text-violet-100 text-md max-w-2xl',
                label: '!text-violet-200 text-md capitalize font-black',
              }}
              defaultValue={post?.content}
              isInvalid={errors?.content?.message ? true : false}
              errorMessage={`${errors?.content?.message}`}
            />
          </div>
          <section className='sm:flex items-center md:py-12 my-12'>
            {user?.user_id === undefined ? <SignInButton /> : <SubmitButton />}
          </section>
        </form>
        {mutation.failureReason ? (
          <p className='text-rose-500 text-xs tracking-tight font-extrabold'>{`${mutation.failureReason}`}</p>
        ) : null}
        {mutation?.isSuccess ? (
          <p className='text-white'>Post has been saved ok!</p>
        ) : null}
      </div>
     
    </section>
  );
}

/*const [id, setId] = React.useState('');
  const location = useLocation();
  const { postId } = location.state;
  const url = `http://127.0.0.1:8000/api/posts/update/post/${id}`;
  const url2 = `http://127.0.0.1:8000/api/posts/get/post/${id}`;
  const { mutation } = useUpdatePost(updatePost, url);

  const { data: post } = postId && useOnePostQuery(getSinglePost, url2);*/
