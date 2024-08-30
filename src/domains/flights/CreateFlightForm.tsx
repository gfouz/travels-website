import { Button } from '@nextui-org/button';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FlightDataSchema, FlightFormData } from '../../schemas/flight.schema';
import { DatePicker } from '@nextui-org/date-picker';
import { Input } from '@nextui-org/input';

const CreateFlightForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlightFormData>({
    resolver: zodResolver(FlightDataSchema),
  });
  const onSubmit = (data: FlightFormData) => {
    console.log(data);
  };
  return (
    <div className='flex items-center py-20 justify-center'>
      <div className='p-8  rounded-3xl shadow-lg w-full max-w-md '>
        <h2 className='text-3xl font-extrabold tracking-tight mb-15 text-center'>
          Crear Vuelos
        </h2>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
      
          <div className='my-8'>
            <div className='w-full mb-5'>
              <Input
                color='secondary'
                label='Price'
                variant='underlined'
                labelPlacement='outside'
                {...register('price')}
                placeholder='Precio del vuelo'
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.price?.message ? true : false}
                errorMessage={`${errors.price?.message}`}
              />
            </div>
          </div>

          
            <div className=''>
              <div className='w-full'>
                <Input
                  color='secondary'
                  label='Numéro de Vuelo'
                  variant='underlined'
                  {...register('flight_number')}
                  placeholder='Enter sixteen numbers'
                  classNames={{ label: '!text-gray-800' }}
                  isInvalid={errors.flight_number?.message ? true : false}
                  errorMessage={`${errors.flight_number?.message}`}
                />
              </div>
            </div>


             <div className=''>
              <div className='w-full'>
                <Input
                  color='secondary'
                  label='Lugar de Salida'
                  variant='underlined'
                  {...register('departure_place')}
                  placeholder='Lugar de Salida'
                  classNames={{ label: '!text-gray-800' }}
                  isInvalid={errors.flight_number?.message ? true : false}
                  errorMessage={`${errors.departure_place?.message}`}
                />
              </div>
            </div>
            <div className=''>
              <div className='w-full'>
                <Input
                  color='secondary'
                  label='Lugar de llegada'
                  variant='underlined'
                  {...register('arrival_place')}
                  placeholder='Lugar de Llegada'
                  classNames={{ label: '!text-gray-800' }}
                  isInvalid={errors.arrival_place?.message ? true : false}
                  errorMessage={`${errors.arrival_place?.message}`}
                />
              </div>
            </div>
            
            <div className=''>
              <div className='w-full'>
                <Controller
                  name='departure_date'
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      color='secondary'
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
        

          <div className=''>
              <div className='w-full'>
                <Controller
                  name='departure_date'
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      color='secondary'
                      label='Expiration date'
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
        
          
           <div className='w-full flex py-10'>
            <Button color='primary' type='submit' className='px-10'>
              Submit
            </Button>
            <Button color='default'  className='px-10 ml-6'>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFlightForm;
