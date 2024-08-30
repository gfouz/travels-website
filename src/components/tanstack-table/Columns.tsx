import Modal from './Modal.tsx';



export const columnsProperties = [
  {
    accessorKey: 'flight_number', // Clave de acceso de datos
    header: 'Numéro de vuelo', // Encabezado de la columna
  },
  {
    accessorKey: 'departure_place',
    header: 'Desde',
  },
  {
    accessorKey: 'arrival_place',
    header: 'Hasta',
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
    cell: ({ row }) => (
       <Modal payload={ row.original } />
    ),
    },
];


/* function handleClick(row: any): void {
  throw new Error("Function not implemented.");
}

 */
