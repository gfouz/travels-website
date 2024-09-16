import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import ModalNavButton from './ModalNavButtons.tsx';
import { Checkin } from '../../../checkins.types.ts';
import { useCheckinStore } from '../../../store/checkinstore.ts';

interface IModal {
  payload: Checkin;
}

export default function NextModal({ payload }: IModal) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useCheckinStore((state) => state.dispatch);
  const { checkin } = useCheckinStore((state) => state);

  return (
    <>
      <div className='flex justify-center flex-wrap gap-3'>
        <Button
          variant='shadow'
          color='danger'
          size='sm'
          onPress={() => {
            dispatch({ type: 'SET_CHECKIN', payload: payload });
            onOpen();
          }}
          className='capitalize h-[20px]'
        >
          Actions
        </Button>
      </div>
      <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Administrar Check-Ins
              </ModalHeader>
              <ModalBody>
                <ModalNavButton checkin_id={checkin.id} />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
