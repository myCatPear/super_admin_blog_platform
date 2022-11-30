import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { blogsAPI } from 'api/blogs';
import { setIsFetchBlogs } from 'app/appSlice';
import { EMPTY_STRING } from 'common/constants';
import { IBlogResponse } from 'common/types/api';

export const fetchSpecificBlog = createAsyncThunk(
  'fetchSpecificBlog',
  async (id: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsFetchBlogs({ value: true }));
      const res = await blogsAPI.getSpecificBlog(id);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    } finally {
      thunkAPI.dispatch(setIsFetchBlogs({ value: false }));
    }
  },
);

const initialState: IBlogResponse = {
  id: '1',
  name: 'test name',
  websiteUrl: 'https://testURL.com',
  createdAt: '2022-11-20T12:15:48.405Z',
  description: 'test description',
};

const specificBlogSlice = createSlice({
  name: 'SpecificBlog',
  initialState,
  reducers: {
    setEmptySpecificBlogState() {
      return {
        id: EMPTY_STRING,
        name: EMPTY_STRING,
        websiteUrl: EMPTY_STRING,
        createdAt: EMPTY_STRING,
        description: EMPTY_STRING,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSpecificBlog.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const specificBlogReducer = specificBlogSlice.reducer;
export const { setEmptySpecificBlogState } = specificBlogSlice.actions;
