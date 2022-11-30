import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { setIsFetchPosts } from '../../../app/appSlice';

import { postsAPI } from 'api/posts';
import { EMPTY_STRING } from 'common/constants';
import { IPostResponse } from 'common/types/api';

export const fetchSpecificPost = createAsyncThunk(
  'specificPost/fetchSpecificPost',
  async (id: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsFetchPosts({ value: true }));
      const res = await postsAPI.getSpecificPost(id);

      return res.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(null);
    } finally {
      thunkAPI.dispatch(setIsFetchPosts({ value: false }));
    }
  },
);

const initialState: IPostResponse = {
  id: EMPTY_STRING,
  createdAt: EMPTY_STRING,
  title: EMPTY_STRING,
  content: EMPTY_STRING,
  blogId: EMPTY_STRING,
  shortDescription: EMPTY_STRING,
  blogName: EMPTY_STRING,
};

export const specificPostSlice = createSlice({
  name: 'specificPost',
  initialState,
  reducers: {
    setEmptySpecificPost() {
      return {
        id: EMPTY_STRING,
        createdAt: EMPTY_STRING,
        title: EMPTY_STRING,
        content: EMPTY_STRING,
        blogId: EMPTY_STRING,
        shortDescription: EMPTY_STRING,
        blogName: EMPTY_STRING,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSpecificPost.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const specificPostReducer = specificPostSlice.reducer;

export const { setEmptySpecificPost } = specificPostSlice.actions;
