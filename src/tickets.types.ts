export type Method = 'POST' | 'PUT';


export type Ticket = {
  airline: string;
  price: number | string;
  description: string; 
  last_reservation_date: string;
}

export type TicketFetchFunction = (
  payload: Ticket,
  url: string,
  method: Method,
  token?: string,
) => Promise<any>;
