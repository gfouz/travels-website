import { UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { GenericObject } from '../../hooks/hooks.types';
import { Button } from '@nextui-org/button';


type MutationResult = {
  text?: string;
  link: string;
  mutation: UseMutationResult<any, Error, GenericObject, unknown> | any ;
};

export default function MutationResultMessage({
  text,
  link,
  mutation,
}: MutationResult) {
  
  const navigate = useNavigate();

  return (
    <>
      {mutation?.failureReason || mutation?.isError ? (
        <p className='text-rose-500 tracking-tight font-extrabold text-xs mt-1'>{`${mutation?.failureReason || mutation?.error}`}</p>
      ) : 
         <>
      {mutation?.isSuccess ? (
        <Button
          onClick={() => {
            navigate(link);
          }}
        >{text ? text :'Ver resultado!'}</Button>
      ) : null}
      {mutation?.isPending ? (
        <p className='tracking-tight font-extrabold text-xs mt-1'>Requesting...</p>
      ) : null}
     </> 
        
        }
     
    </>
  );
}
