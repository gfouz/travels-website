import { z } from 'zod';

const departureDateSchema = z.object({
  calendar: z.object({
    identifier: z.string(),
  }),
  era: z.string(),
  year: z.number().min(0),
  month: z.number().min(1).max(12),
  day: z.number().min(1).max(31),
});

const timeSchema = z.object({
  hour: z.number(),
  minute: z.number(),
  second: z.number(),
  millisecond: z.number(),
});

// Define el esquema de validación con Zod
export const FlightDataSchema = z.object({
 /* price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((num) => !isNaN(num) && num > 0, 'Price must be a positive number'),*/
  flight_number: z.string().min(1, 'Flight number is required'),
  departure_place: z.string().min(1, 'Departure place is required'),
  arrival_place: z.string().min(1, 'Arrival place is required'),
  departure_time: timeSchema,
  arrival_time: timeSchema,
  departure_date: departureDateSchema,
  luggage: z.string(),
});

export type FlightFormData = z.infer<typeof FlightDataSchema>;
export type timeSchemaFormData = z.infer<typeof timeSchema>;
