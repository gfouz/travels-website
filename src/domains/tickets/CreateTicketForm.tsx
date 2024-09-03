import { Button } from '@nextui-org/button';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePicker } from '@nextui-org/date-picker';
import { Input } from '@nextui-org/input';
//import { TimeInput } from '@nextui-org/date-input';
//import { formatDate, formatTime, url } from './constants.ts';
//import { useUserStore } from '../../store/userstore.ts';
import { TicketFormData, TicketSchema } from '../../schemas/ticket.schema';
//import { createUpdateService } from '../../services/flights/createUpdateService.ts';
//import { useMakeMutation } from '../../hooks/flights/useMakeMutation.tsx';

const CreateTicketForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketFormData>( {
    resolver: zodResolver(TicketSchema),
  } );
  /*const user = useUserStore((state) => state.user);
  const { mutation } = useMakeMutation(
    createUpdateService,
    url.create_flight,
    'POST',
    user?.token,
  );*/

  const onSubmit: SubmitHandler<TicketFormData> = async (
  
  ) => {
    /* const last_reservation_date = formatDate(data);
    const _data = {
      ...data,
    };
    console.log(_data)
    await mutation.mutateAsync(_data); */
  };
  return (
    <div className='flex items-center py-20 justify-center'>
      <div className='p-8  rounded-3xl shadow-lg w-full max-w-md dark:border'>
        <h2 className='text-3xl font-extrabold tracking-tight mb-15 text-center'>
          Crear Vuelo
        </h2>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='my-8'>
            <div className='w-full mb-5'>
              <Input
                label='Aerolínea'
                variant='underlined'
                labelPlacement='outside'
                {...register('airline')}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.airline?.message ? true : false}
                errorMessage={`${errors.airline?.message}`}
              />
            </div>
          </div>

          <div className='py-4'>
            <div className='w-full'>
               <Input
                type='number'
                label='Precio'
                variant='underlined'
                labelPlacement='outside'
                {...register('price')}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.price?.message ? true : false}
                errorMessage={`${errors.price?.message}`}
              />
            </div>
          </div>

          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Descripción'
                variant='underlined'
                {...register('description')}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.description?.message ? true : false}
                errorMessage={`${errors.description?.message}`}
              />
            </div>
          </div>

          <div className='py-4'>
            <div className='w-full'>
              <Controller
                name='last_reservation_date'
                control={control}
                render={({ field }) => (
                  //@ts-ignore
                  <DatePicker
                    {...field}
                    label='Fecha límite para reservar'
                    variant='underlined'
                    dateInputClassNames={{
                      input: 'datepicker-input',
                      label: '!text-gray-800',
                    }}
                    isInvalid={errors.last_reservation_date?.message ? true : false}
                    errorMessage={`${errors.last_reservation_date?.message}`}
                  />
                )}
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

export default CreateTicketForm;

/*

{
  "hour": 2,
  "minute": 0,
  "second": 0,
  "millisecond": 0
}

*/
