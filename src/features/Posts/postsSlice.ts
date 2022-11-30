import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { postsAPI } from 'api/posts';
import { setIsFetchPosts } from 'app/appSlice';
import { IPostResponse, IResponse } from 'common/types/api';
import { fetchAllPostsForSpecificBlog } from 'features';

const initialState: IResponse<IPostResponse[]> = {
  pagesCount: 0,
  pageSize: 0,
  page: 0,
  totalCount: 0,
  items: [
    {
      id: '1',
      createdAt: '2022-11-23T20:55:51.495Z',
      blogId: '1',
      blogName: 'test blog name 1',
      content: 'test content 1',
      shortDescription: 'test short description 1',
      title: 'test title 1',
    },
    {
      id: '2',
      createdAt: '2022-11-23T20:55:51.495Z',
      blogId: '2',
      blogName: 'test blog name 2',
      content: 'test content 2',
      shortDescription: 'test short description 2',
      title: 'test title 2',
    },
    {
      id: '3',
      createdAt: '2022-11-23T20:55:51.495Z',
      blogId: '3',
      blogName: 'test blog name 3',
      content: 'test content 3',
      shortDescription: 'test short description 3',
      title: 'test title 3',
    },
    {
      id: '4',
      createdAt: '2022-11-23T20:55:51.495Z',
      blogId: '4',
      blogName: 'test blog name 4',
      content: 'test content 4',
      shortDescription: 'test short description 4',
      title: 'test title 4',
    },
  ],
};

export const fetchAllPosts = createAsyncThunk('fetchAllPosts', async (arg, thunkAPI) => {
  try {
    thunkAPI.dispatch(setIsFetchPosts({ value: true }));
    const res = await postsAPI.getAllPosts();

    return res.data;
  } catch (error) {
    console.log(error);

    return thunkAPI.rejectWithValue(null);
  } finally {
    thunkAPI.dispatch(setIsFetchPosts({ value: false }));
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchAllPostsForSpecificBlog.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const postsReducer = postsSlice.reducer;
