import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';


const WhatsAppButton = () => {
    const phoneNumber = '+5354278815'; // Número de teléfono predeterminado
    const message = 'Hola, ¿cómo estás?'; // Mensaje predeterminado
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=+5354278815';

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
        >
           <Button
            showAnchorIcon
            as={Link}
            size='md'
            color='danger'
            className='mt-4'
          >
            Reserva Ahora!
          </Button>
        </a>
    );
};

export default WhatsAppButton;
