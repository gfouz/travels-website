import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

export default function ModalNavButton() {
  return (
    <>
      <div className='flex justify-evenly items-center'>
        <Button showAnchorIcon href='flights/create' as={Link} size='sm'>
          Añadir
        </Button>
        <Button showAnchorIcon href='flights/update' as={Link} size='sm'>
          Editar
        </Button>
        <Button showAnchorIcon href='flights/duplicate' as={Link} size='sm'>
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
        href='tickets/create/'
        as={Link}
        size='sm'
        color='warning'
      >
        Reservar Pasaje
      </Button>
    </>
  );
}
