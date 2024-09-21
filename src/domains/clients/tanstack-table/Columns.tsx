import Modal from "./Modal";
import { Flight } from '../../../flights.types.ts';

type IDateGetValue =  () => string | number | Date;
type IGetValue = ()=> string;
type OriginalI = {
  original: Flight;
};

interface IRow {
  row: OriginalI;
}

export const columnsProperties = [
 
  {
    accessorKey: 'departure_place',
    cell: (info: { getValue: IGetValue }) => <h2 className='text-slate-500 font-extrabold text-lg'>{info.getValue()}</h2>,
    header: 'Por Origen',
  },
  {
    accessorKey: 'arrival_place',
    cell: (info: { getValue: IGetValue }) => <i className='text-slate-500 font-extrabold text-lg'>{info.getValue()}</i>,
    header: 'Por Destino',
  },
  {
    accessorKey: 'adult_price',
    cell: (info: { getValue: IGetValue }) => <i className='text-slate-500 font-extrabold text-lg'>Precio: {info.getValue()}$</i>,
    header: 'Por Precio',
  },
   {
    accessorKey: 'departure_date',
    cell: (info: { getValue: IDateGetValue }) => <i className='text-rose-500 text-xl'>{new Date(info.getValue()).toDateString()}</i>,
    header: 'Por Fecha',
  },
];

/* function handleClick(row: any): void {
  throw new Error("Function not implemented.");
}

 
(property) cell: ({ row }: {
    row: any;
}) => JSX.Element

cell: ({ row }: {
    row: any;
}) => JSX.Element

*/
