import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


import { checkinactions, CheckinAction, CheckinStore } from './checkinActions.ts';

const reducer = (state: CheckinStore, action: CheckinAction) => {
  const { type } = action;
  const currentAction = checkinactions[type];
  return currentAction ? currentAction(state, action) : state;
};

export const initialState = {
  id: undefined,
  price: undefined,
  checkin_number: undefined,
  departure_place: undefined,
  arrival_place: undefined,
  departure_time: undefined,
  arrival_time: undefined,
  departure_date: undefined,
  luggage: undefined,
};
//Redux-like patterns store
const checkinState = persist<CheckinStore>(
  (set) => ({
    checkin: initialState,
    dispatch: (action: CheckinAction) => set((state) => reducer(state, action)),
  }),
  {
    name: 'checkin', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const useCheckinStore = create(checkinState);

/*example of how to use the store

import {useCheckinStore} from 'checkinstore'
const checkin = useCheckinStore(state => state.checkin)
const dispatch = useCheckinStore((state) => state.dispatch)
dispatch({type:'SET_CHECKIN', payload: checkin}) 
*/
