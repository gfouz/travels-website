import { z } from 'zod';

// Definición del esquema de validación con Zod
export const checkinSchema = z.object({
  first_name: z.string().nonempty("El nombre es requerido"),
  last_name: z.string().nonempty("El apellido es requerido"),
  passport: z.string().nonempty("El número de pasaporte es requerido"),
  reservation_code: z.string().nonempty("El código de reserva es requerido"),
});
