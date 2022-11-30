import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isInitializedApp: false,
  isFetchBlogs: false,
  isFetchPosts: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsInitializedApp(state, action: PayloadAction<{ value: boolean }>) {
      state.isInitializedApp = action.payload.value;
    },
    setIsFetchBlogs(state, action: PayloadAction<{ value: boolean }>) {
      state.isFetchBlogs = action.payload.value;
    },
    setIsFetchPosts(state, action: PayloadAction<{ value: boolean }>) {
      state.isFetchPosts = action.payload.value;
    },
  },
});

export const appReducer = appSlice.reducer;

export const { setIsInitializedApp, setIsFetchBlogs, setIsFetchPosts } = appSlice.actions;
