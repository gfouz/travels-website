import { Flight } from '../flights.types';

/* export interface Flight {
  id: undefined | string;
  price?: number; 
  flight_number: undefined | string;
  departure_place: undefined | string;
  arrival_place: undefined | string;
  departure_time: undefined | string;
  arrival_time: undefined | string;
  departure_date: undefined | string;
  luggage: undefined | number;
} */

export type FlightAction = {
  type: string;
  payload: Flight;
};
export interface FlightStore {
  flight: Flight;
  dispatch: (action: FlightAction) => void;
}

interface FlightActions {
  [x: string]: (
    state: FlightStore,
    action: FlightAction,
  ) => {
    flight: Flight;
    dispatch: (action: FlightAction) => void;
  };
}

export interface FlightActionInterface {
  SET_FLIGHT: string;
}
export const FLIGHT_ACTION_TYPES: FlightActionInterface = {
  SET_FLIGHT: 'SET_FLIGHT',
};

export const flightactions: FlightActions = {
  [FLIGHT_ACTION_TYPES.SET_FLIGHT]: (
    state: FlightStore,
    action: FlightAction,
  ) => {
    const flight = { ...action.payload };
    const newState = {
      ...state,
      flight,
    };
    return newState;
  },
};
