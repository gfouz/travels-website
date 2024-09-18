import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { Flight } from '../../../flights.types.ts';
import { useFlightStore } from '../../../store/flightstore.ts';
import FlightInfo from './FlightInfo.tsx'

interface IModal {
  payload: Flight;
}

export default function NextModal({ payload }: IModal) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useFlightStore((state) => state.dispatch);

  const { flight } = useFlightStore((state) => state);

  return (
    <>
      <div className='flex justify-center flex-wrap gap-3'>
        <Button
          size='md'
          variant='shadow'
          onPress={() => {
            dispatch({ type: 'SET_FLIGHT', payload: payload });
            onOpen();
          }}
          className='capitalize h-[20px]'
        >
          VER MAS
        </Button>
      </div>
      <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Acerca del Vuelo.
              </ModalHeader>
              <ModalBody>
               <FlightInfo flight={flight} />  
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
