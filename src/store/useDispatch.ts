import { Dispatch, Flight } from './flightstore';

export function setFlight(dispatch: Dispatch, flight: Flight) {
  dispatch({ type: 'SET_FLIGHT', payload: flight });
}
