import { Button } from '@nextui-org/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@nextui-org/input';
import { useUserStore } from '../../store/userstore.ts';
import { useTicketStore } from '../../store/ticketstore.ts';
import { CheckinFormData, CheckinSchema } from '../../schemas/checkin.schema.ts';
import { useGenericMutation } from '../../hooks/useGenericMutation.tsx';
import { mutationFunction } from '../../services/mutationFunction.ts';
import { SubmitHandler, useForm } from 'react-hook-form';

const CreateCheckinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckinFormData>({
    resolver: zodResolver(CheckinSchema),
  });
  //Global store hooks
  const user = useUserStore((state) => state.user);
  const { ticket } = useTicketStore((state) => state);
  
  //--------------------------------------------------
  const url = 'http://127.0.0.1:8000/api/checkins/create-checkin';
  const { mutation } = useGenericMutation(
    mutationFunction,
    url,
    'POST',
    ['none'],
    ['create-checkin'],
    user?.token,
  );
  const onSubmit: SubmitHandler<CheckinFormData> = async (
    data: CheckinFormData,
  ) => {
    const _data = {
      ...data,
      ticket_id: ticket?.id,
      
    };
    await mutation.mutateAsync(_data);
    
  };
  return (
    <div className='flex items-center py-20 justify-center'>
      <div className='p-8  rounded-3xl shadow-lg w-full max-w-md dark:border'>
        <h2 className='text-3xl font-extrabold tracking-tight mb-15 text-center'>
          Checkin
        </h2>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='my-8'>
            <div className='w-full mb-5'>
              <Input
                label='Nombre'
                variant='underlined'
                labelPlacement='outside'
                {...register('first_name')}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.first_name?.message ? true : false}
                errorMessage={`${errors.first_name?.message}`}
              />
            </div>
          </div>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Apellido'
                variant='underlined'
                {...register('last_name')}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.last_name?.message ? true : false}
                errorMessage={`${errors.last_name?.message}`}
              />
            </div>
          </div>

          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Passport'
                variant='underlined'
                {...register('passport')}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.passport?.message ? true : false}
                errorMessage={`${errors.passport?.message}`}
              />
            </div>
          </div>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Código de Reservación'
                variant='underlined'
                {...register('reservation_code')}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.reservation_code?.message ? true : false}
                errorMessage={`${errors.reservation_code?.message}`}
              />
            </div>
          </div>
          <div className='w-full flex py-10'>
            <Button color='primary' type='submit' className='px-10'>
              Submit
            </Button>
            <Button color='default' className='px-10 ml-6'>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCheckinForm;

/*

{
  "hour": 2,
  "minute": 0,
  "second": 0,
  "millisecond": 0
}

*/
