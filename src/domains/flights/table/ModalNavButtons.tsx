import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

export default function ModalNavButton() {
  return (
    <>
      <div className='flex justify-evenly items-center'>
        <Button showAnchorIcon href='/create-flight' as={Link} size='sm'>
          Añadir
        </Button>
        <Button showAnchorIcon href='/update-flight' as={Link} size='sm'>
          Editar
        </Button>
        <Button showAnchorIcon href='/copy-flight' as={Link} size='sm'>
          Duplicar
        </Button>
        <Button
          showAnchorIcon
          href='/delete-flight'
          as={Link}
          size='sm'
          color='danger'
        >
          Eliminar
        </Button>
      </div>
      <Button
        showAnchorIcon
        href='/create-ticket'
        as={Link}
        size='sm'
        color='warning'
      >
        Reservar Pasaje
      </Button>
    </>
  );
}
