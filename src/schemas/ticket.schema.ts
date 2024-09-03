import { z } from 'zod';

const lastReservationDateSchema = z
  .object({
    calendar: z.object({
      identifier: z.string(),
    }),
    era: z.string(),
    year: z.number().min(0),
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31),
  })


// Esquema de validación con Zod
export const TicketSchema = z.object({
  airline: z.string().min(1, "Airline is required"),
  price: z.number().positive("Price must be greater than zero"),
  description: z.string().optional(),
  last_reservation_date: lastReservationDateSchema,

});

export type TicketFormData = z.infer<typeof TicketSchema>;
