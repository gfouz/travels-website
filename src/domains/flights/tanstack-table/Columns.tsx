import Modal from './Modal.tsx';
import { Flight } from '../../../flights.types.ts';

type OriginalI = {
  original: Flight;
};

interface IRow {
  row: OriginalI;
}

export const columnsProperties = [
  {
    accessorKey: 'flight_number', // Clave de acceso de datos
    header: 'Numéro de vuelo', // Encabezado de la columna
  },
  {
    accessorKey: 'departure_place',
    header: 'Origen',
  },
  {
    accessorKey: 'arrival_place',
    header: 'Destino',
  },
  {
    accessorKey: 'departure_time',
    header: 'Hora de salida',
  },
  {
    accessorKey: 'arrival_time',
    header: 'Hora de llegada',
  },
  {
    accessorKey: 'departure_date',
    header: 'Fecha de vuelo',
  },
  {
    accessorKey: 'actions', // Puedes usar un accessor que no exista en los datos, solo para la presentación
    header: 'Actions', // Título de la columna
    cell: ({ row }: IRow) => (
      <Modal payload={row.original} />
    ),
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
