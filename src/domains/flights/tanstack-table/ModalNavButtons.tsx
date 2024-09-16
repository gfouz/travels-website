import React from 'react';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useNavigate } from 'react-router-dom';

import { Flight } from '../../../flights.types.ts';
import { deleteRequest } from '../../../services/deleteRequest';
import { useDeleteMutation } from '../../../hooks/useDeleteMutation.tsx';
import { useUserStore } from '../../../store/userstore.ts';
import MutationResultMessage from '../../shared/MutationResultMessage.tsx';

type ModalNavButtonProps = {
  flight: Flight;
};

export default function ModalNavButton({ flight }: ModalNavButtonProps) {
  const navigate = useNavigate();

  const [warning, setWarning] = React.useState(false);
  const url = `http://127.0.0.1:8000/api/flights/delete-flight/${flight?.id}`;

  const user = useUserStore((state) => state.user);

  const { mutation } = useDeleteMutation(
    deleteRequest,
    url,
    ['get-flights'],
    ['delete-flight'],
    user?.token,
  );

  const handleClick = () => {
    navigate('/flight-tickets', { state: flight });
  };

  return warning == false ? (
    <>
      <div className=' gap-1'>
       <div className='w-full flex justify-center items-center gap-2'> 
        <Button showAnchorIcon href='flights/create' as={Link} size='sm'>
          Añadir
        </Button>
        <Button showAnchorIcon href='flights/update' as={Link} size='sm'>
          Editar
        </Button>
        <Button showAnchorIcon href='flights/duplicate' as={Link} size='sm'>
          Duplicar
        </Button>
        </div>
        
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Button
          showAnchorIcon
          href='tickets/create/'
          as={Link}
          size='sm'
          color='primary'
        >
          Reservar Pasaje
        </Button>
        <Button
          showAnchorIcon
          as={Link}
          size='sm'
          color='default'
          onPress={() => {
            handleClick();
          }}
        >
          Pasajes x Vuelos
        </Button>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Button showAnchorIcon href='flights/create-connection' as={Link} size='sm'>
          Asociar a otro
        </Button>
        <Button
          onPress={() => {
            setWarning(true);
          }}
          size='sm'
          color='danger'
        >
          Eliminar
        </Button>
     </div> 
    </>
  ) : (
    <>
      <Button
        size='sm'
        color='danger'
        onPress={async () => {
          await mutation.mutateAsync();
        }}
      >
        <span className='font-extrabold'>
          Advertencia! Eliminará un registro!
        </span>
      </Button>
      <MutationResultMessage mutation={mutation} link='/flights' />
    </>
  );
}
