export type Method = 'POST' | 'PUT';



export interface Flight {
  id?: string;
  price?: number | string;
  flight_number?: string;
  departure_place?: string;
  arrival_place?: string;
  departure_time?: string;
  arrival_time?: string;
  departure_date?: string;
  luggage?: number | string;
}


export type FetchApiType = (
  payload: Flight,
  url: string,
  method: Method,
  token?: string,
) => Promise<any>;
