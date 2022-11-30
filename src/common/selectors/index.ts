import { RootStateType } from 'app/store';
import { IBlogResponse } from 'common/types/api/Blogs';
import { IPostResponse } from 'common/types/api/Posts';

export const getIsInitializedApp = (state: RootStateType): boolean =>
  state.appReducer.isInitializedApp;

export const getAllBlogs = (state: RootStateType): IBlogResponse[] =>
  state.blogsReducer.items;

export const getAllPosts = (state: RootStateType): IPostResponse[] =>
  state.postsReducer.items;

export const getIsFetchBlogs = (state: RootStateType): boolean =>
  state.appReducer.isFetchBlogs;

export const getIsFetchPosts = (state: RootStateType): boolean =>
  state.appReducer.isFetchPosts;

export const getCurrentSpecificBlog = (state: RootStateType): IBlogResponse =>
  state.specificBlogReducer;

export const getCurrentSpecificPost = (state: RootStateType): IPostResponse =>
  state.specificPostReducer;
