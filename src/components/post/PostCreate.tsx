import { useUserStore } from '../../store/userstore.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPostService } from '../../services/createPostService.tsx';
import { useMutationCreatePost } from '../../hooks/useMutationCreatePost.tsx';
import { useCategoriesQuery } from '../../hooks/useCategoriesQuery.tsx';
import SubmitButton from '../../components/buttons/SubmitButton.tsx';
import SignInButton from '../../components/buttons/SignInButton.tsx';
import ResponsiveTable from '../../components/table/ResponsiveTable.tsx';
import Select from '../../components/select/NextSelect.tsx';
import Textarea from '../../components/textarea/TextArea.tsx';

import { Post, PostSchema } from '../../schemas/post.schema';
import Input from './Input.tsx';

export default function CreatePost() {
  const user = useUserStore((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({
    resolver: zodResolver(PostSchema),
  });

  const { mutation } = useMutationCreatePost(createPostService, user?.token);
  const { categories } = useCategoriesQuery();
  const default_categories = [
    { name: 'science' },
    { name: 'technology' },
    { name: 'python' },
  ];

  const onSubmit: SubmitHandler<Post> = async (data) => {
    //@ts-ignore
    data.categories = data.categories.split(',');
    await mutation.mutateAsync(data);
  };
  return (
    <section className='py-16 bg-gray-300 flex flex-col items-center md:flex-row justify-evenly md:items-start'>
      <div className='mb-4 bg-purple-950 p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-yellow-500 text-3xl font-extrabold tracking-tight mb-10 text-center'>
          Create Post
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
              placeholder='Choose a title'
            />
          </div>

          <div className='py-4 text-slate-900'>
            <Select
              register={register}
              errors={errors}
              categories={categories ? categories : default_categories}
            />
          </div>

          <div className='my-4'>
            <Textarea register={register} errors={errors} label='content' />
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
      <div>
        <ResponsiveTable />
      </div>
    </section>
  );
}
