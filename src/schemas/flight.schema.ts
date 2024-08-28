import { z } from 'zod';

// Define el esquema de validación con Zod
const FlightDataSchema = z.object({
  price: z.number().positive().min(0, 'Price must be positive'),
  flight_number: z.string().min(1, 'Flight number is required'),
  departure_place: z.string().min(1, 'Departure place is required'),
  arrival_place: z.string().min(1, 'Arrival place is required'),
  departure_time: z
    .string()
    .regex(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
  arrival_time: z
    .string()
    .regex(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
  departure_date: z.date(),
  luggage: z.number().int().min(0, 'Luggage cannot be less than 0'),
});

export type FlightType = z.infer<typeof FlightDataSchema>;
