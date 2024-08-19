import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { actions, Action, PostStore } from './actions.ts';

const reducer = (state: PostStore, action: Action) => {
  const { type } = action;
  const currentAction = actions[type];
  return currentAction ? currentAction(state, action) : state;
};

export const initialState = {
  id: '',
  title: 'initial title',
  content: 'initial content',
  slug: 'initial slug',
  author: { username: 'fisrt author' },
  created_at: 'string',
};
//Redux-like patterns store
const postState = persist<PostStore>(
  (set) => ({
    post: initialState,
    dispatch: (action: Action) => set((state) => reducer(state, action)),
  }),
  {
    name: 'post', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const usePostStore = create(postState);

/*example of how to consume the store

import {usePostStore} from './store'
const post = useCartStore( state => state.post )
const dispatch = useCartStore((state) => state.dispatch)
dispatch({type:'SET_POST', payload: post}) 
dispatch({type:'SET_TITLE', payload: post}) 
dispatch({type:'SET_CONTENT', payload: post}) 
*/
