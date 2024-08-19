import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { useractions, UserAction, UserStore } from './actions.ts';

const reducer = (state: UserStore, action: UserAction) => {
  const { type } = action;
  const currentAction = useractions[type];
  return currentAction ? currentAction(state, action) : state;
};

export const initialState = {
  user_id: undefined,
  token: undefined,
};
//Redux-like patterns store
const userState = persist<UserStore>(
  (set) => ({
    user: initialState,
    dispatch: (action: UserAction) => set((state) => reducer(state, action)),
  }),
  {
    name: 'user', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const useUserStore = create(userState);
