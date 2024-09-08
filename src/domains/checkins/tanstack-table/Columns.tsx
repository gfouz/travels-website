import Modal from './Modal.tsx';
import { Ticket } from '../../../tickets.types.ts';

type OriginalI = {
  original: Ticket;
};

interface IRow {
  row: OriginalI;
}

export const columnsProperties = [
  {
    accessorKey: 'airline', // Clave de acceso de datos
    header: 'Aerolínea', // Encabezado de la columna
  },
  {
    accessorKey: 'status',
    header: 'estado',
  },
  {
    accessorKey: 'flights.departure_place',
    header: 'Desde',
  },
  {
    accessorKey: 'flights.arrival_place',
    header: 'Hasta',
  },
  {
    accessorKey: 'actions', // Puedes usar un accessor que no exista en los datos, solo para la presentación
    header: 'Actions', // Título de la columna
    cell: ({ row }: IRow) => <Modal payload={row.original} />,
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
