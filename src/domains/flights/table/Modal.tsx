import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import ModalNavButton from './ModalNavButtons.tsx';
import { Flight } from '../../store/flightActions.ts';
import { useFlightStore } from '../../store/flightstore.ts';

interface IModal {
  payload: Flight;
}

export default function NextModal({ payload }: IModal) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useFlightStore((state) => state.dispatch);

  const { flight } = useFlightStore((state) => state);
  console.log(flight);

  return (
    <>
      <div className='flex justify-center flex-wrap gap-3'>
        <Button
          variant='shadow'
          color='danger'
          size='sm'
          onPress={() => {
            dispatch({ type: 'SET_FLIGHT', payload: payload });
            onOpen();
          }}
          className='capitalize'
        >
          Actions
        </Button>
      </div>
      <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Administrar Vuelos
              </ModalHeader>
              <ModalBody>
                <ModalNavButton />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
