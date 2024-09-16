import { Button } from '@nextui-org/button';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePicker } from '@nextui-org/date-picker';
import { Input } from '@nextui-org/input';
import { TimeInput } from '@nextui-org/date-input';
import { formatDate, formatTime, url } from './constants.ts';
import { useUserStore } from '../../store/userstore.ts';
import { useFlightStore } from '../../store/flightstore.ts';
import { FlightDataSchema, FlightFormData } from '../../schemas/flight.schema';
import { useGenericMutation } from '../../hooks/useGenericMutation.tsx';
import { mutationFunction } from '../../services/mutationFunction.ts';
import MutationResultMessage from '../shared/MutationResultMessage.tsx';

const DuplicateFlightForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlightFormData>({
    resolver: zodResolver(FlightDataSchema),
  });

  //Global store hooks
  const user = useUserStore((state) => state.user);
  const { flight } = useFlightStore((state) => state);
  //--------------------------------------------------

  const { mutation } = useGenericMutation(
    mutationFunction,
    url.create_flight,
    'POST',
    ['get-flights'],
    ['duplicate-flights'],
    user?.token,
  );

  const onSubmit: SubmitHandler<FlightFormData> = async (
    data: FlightFormData,
  ) => {
    const _departure_date = formatDate(data);
    const _departure_time = formatTime(data.departure_time);
    const _arrival_time = formatTime(data.arrival_time);

    const _data = {
      ...data,
      departure_date: _departure_date,
      departure_time: _departure_time,
      arrival_time: _arrival_time,
    };
    //console.log(_data)
    await mutation.mutateAsync(_data);
  };
  return (
    <div className='flex items-center py-20 justify-center'>
      <div className='p-8  rounded-3xl shadow-lg shadow-black w-full max-w-md dark:border'>
        <h2 className='text-3xl font-extrabold tracking-tight mb-15 text-center'>
          Duplicado de Vuelo
        </h2>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Número de Vuelo'
                variant='underlined'
                {...register('flight_number')}
                defaultValue={flight?.flight_number}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.flight_number?.message ? true : false}
                errorMessage={`${errors.flight_number?.message}`}
              />
            </div>
          </div>

          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Lugar de Salida'
                variant='underlined'
                {...register('departure_place')}
                defaultValue={flight?.departure_place}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.flight_number?.message ? true : false}
                errorMessage={`${errors.departure_place?.message}`}
              />
            </div>
          </div>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Lugar de llegada'
                variant='underlined'
                {...register('arrival_place')}
                defaultValue={flight?.arrival_place}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.arrival_place?.message ? true : false}
                errorMessage={`${errors.arrival_place?.message}`}
              />
            </div>
          </div>

          <div className='py-4'>
            <div className='w-full'>
              <Controller
                name='departure_date'
                control={control}
                render={({ field }) => (
                  //@ts-ignore
                  <DatePicker
                    {...field}
                    label='Fecha de vuelo'
                    variant='underlined'
                    dateInputClassNames={{
                      input: 'datepicker-input',
                      label: '!text-gray-800',
                    }}
                    isInvalid={errors.departure_date?.message ? true : false}
                    errorMessage={`${errors.departure_date?.message}`}
                  />
                )}
              />
            </div>
          </div>

          <div className='py-4'>
            <div className='w-full'>
              <Controller
                name='departure_time'
                control={control}
                render={({ field }) => (
                  //@ts-ignore
                  <TimeInput
                    hourCycle={24}
                    label='Hora del Vuelo'
                    labelPlacement='outside'
                    {...field}
                    isInvalid={errors.departure_time?.message ? true : false}
                    errorMessage='Please enter a valid time'
                  />
                )}
              />
            </div>
          </div>

          <div className='py-4'>
            <div className='w-full'>
              <Controller
                name='arrival_time'
                control={control}
                render={({ field }) => (
                  //@ts-ignore
                  <TimeInput
                    {...field}
                    hourCycle={24}
                    label='Hora estimada de llegada'
                    labelPlacement='outside'
                    isInvalid={errors.arrival_time?.message ? true : false}
                    errorMessage='Please enter a valid time'
                  />
                )}
              />
            </div>
          </div>

          <div className='my-8'>
            <div className='w-full mb-5'>
              <Input
                type='number'
                label='Equipaje'
                variant='underlined'
                labelPlacement='outside'
                {...register('luggage')}
                defaultValue={flight?.luggage?.toString()}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.luggage?.message ? true : false}
                errorMessage={`${errors.luggage?.message}`}
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
        <section>
          <MutationResultMessage mutation={mutation} link='/flights' />
        </section>
      </div>
    </div>
  );
};

export default DuplicateFlightForm;

/*

{
  "hour": 2,
  "minute": 0,
  "second": 0,
  "millisecond": 0
}

*/
