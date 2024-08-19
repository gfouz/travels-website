

export interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  author: { username: string };
  created_at: string;
}

export type Action = {
  type: string;
  payload: Post;
};
export interface PostStore {
  post: Post;
  dispatch: (action: Action) => void;
}

interface Actions {
  [x: string]: (
    state: PostStore,
    action: Action,
  ) => {
    post: Post;
    dispatch: (action: Action) => void;
  };
}
export interface ActionTypes {
  SET_POST: string;
  SET_TITLE: string;
  SET_CONTENT: string;
}
export const ACTION_TYPES: ActionTypes = {
  SET_POST: 'SET_POST',
  SET_TITLE: 'SET_TITLE',
  SET_CONTENT: 'SET_CONTENT',
};
export const actions: Actions = {
  [ACTION_TYPES.SET_POST]: (state: PostStore, action: Action) => {
    const post = { ...action.payload };
    const newState = {
      ...state,
      post,
    };
    return newState;
  },
  [ACTION_TYPES.SET_TITLE]: (state: PostStore, action: Action) => {
    const post = { ...state.post, title: action.payload.title };
    const newState = {
      ...state,
      post,
    };
    return newState;
  },

  [ACTION_TYPES.SET_CONTENT]: (state: PostStore, action: Action) => {
    const post = {
      ...state.post,
      content: action.payload.content,
    };
    const newState = {
      ...state,
      post,
    };

    return newState;
  },
};

//---------------UserStore------------------------------------

type UndefinedOrString = undefined | string;

export interface User {
  user_id: UndefinedOrString;
  token: UndefinedOrString;
}

export type UserAction = {
  type: string;
  payload: User;
};
export interface UserStore {
  user: User;
  dispatch: (action: UserAction) => void;
}

interface UserActions {
  [x: string]: (
    state: UserStore,
    action: UserAction,
  ) => {
    user: User;
    dispatch: (action: UserAction) => void;
  };
}

export interface UserActionInterface {
  SET_USER: string;
  LOG_OUT: string;
}
export const USER_ACTION_TYPES: UserActionInterface = {
  SET_USER: 'SET_USER',
  LOG_OUT: 'LOG_OUT',
};

export const useractions: UserActions = {
  [USER_ACTION_TYPES.SET_USER]: (state: UserStore, action: UserAction) => {
    const user = { ...action.payload };
    const newState = {
      ...state,
      user,
    };
    return newState;
  },
  [USER_ACTION_TYPES.LOG_OUT]: (state: UserStore, action: UserAction) => {
    const user = { ...action.payload };
    const newState = {
      ...state,
      user,
    };
    return newState;
  },
};
