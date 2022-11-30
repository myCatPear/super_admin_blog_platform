import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './appSlice';

import {
  blogsReducer,
  postsReducer,
  specificBlogReducer,
  specificPostReducer,
} from 'features';

export const store = configureStore({
  reducer: {
    blogsReducer,
    postsReducer,
    specificBlogReducer,
    appReducer,
    specificPostReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
