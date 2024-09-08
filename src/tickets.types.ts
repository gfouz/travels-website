import { Flight } from './flights.types';
import { User } from './users.types';
export type Method = 'POST' | 'PUT';

export type Ticket = {
  id?: string;
  airline?: string;
  price?: number | string;
  description?: string;
  flight?: Flight;
  ticket_issuer?: User;
  last_reservation_date?: string;
};

export type TicketFetchFunction = (
  payload: Ticket,
  url: string,
  method: Method,
  token?: string,
) => Promise<any>;
