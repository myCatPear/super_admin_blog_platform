import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { blogsAPI } from 'api/blogs';
import { setIsFetchBlogs, setIsFetchPosts } from 'app/appSlice';
import { IBlogCreateData, IBlogResponse } from 'common/types/api/Blogs';
import { IResponse } from 'common/types/api/CommonApiTypes';

const initialState: IResponse<Array<IBlogResponse>> = {
  pagesCount: 0,
  page: 0,
  pageSize: 0,
  totalCount: 0,
  items: [
    {
      name: 'GOOGLE',
      createdAt: 'YESTERDAY',
      id: '1',
      websiteUrl: 'youtube.com',
      description: 'test description',
    },
  ],
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (arg, thunkAPI) => {
  try {
    thunkAPI.dispatch(setIsFetchBlogs({ value: true }));
    const res = await blogsAPI.getAllBlogs();

    return res.data;
  } catch (error) {
    console.log('error', error);

    return thunkAPI.rejectWithValue(null);
  } finally {
    thunkAPI.dispatch(setIsFetchBlogs({ value: false }));
  }
});

export const fetchAllPostsForSpecificBlog = createAsyncThunk(
  'blogs/fetchAllPostsForSpecificBlog',
  async (id: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsFetchPosts({ value: true }));
      const res = await blogsAPI.getAllPostsForSpecificBlogs(id);

      return res.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(null);
    } finally {
      thunkAPI.dispatch(setIsFetchPosts({ value: false }));
    }
  },
);

export const createBlog = createAsyncThunk(
  'blogs/createBlog',
  async (param: IBlogCreateData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsFetchBlogs({ value: true }));
      await blogsAPI.createBlog(param);
    } catch (error) {
      console.log(error);
    } finally {
      thunkAPI.dispatch(setIsFetchBlogs({ value: false }));
    }
  },
);

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const blogsReducer = blogsSlice.reducer;
