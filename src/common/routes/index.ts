import {
  ROUTE_TO_ADD_BLOGS,
  ROUTE_TO_BLOGS,
  ROUTE_TO_EDIT_SPECIFIC_BLOG,
  ROUTE_TO_NOT_EXISTING_PAGE,
  ROUTE_TO_POSTS,
  ROUTE_TO_SPECIFIC_BLOGS,
  ROUTE_TO_SPECIFIC_POSTS,
} from 'common/constants';
import { PageNotFound } from 'components';
import { AddBlog, Blogs, EditBlog, Posts, SpecificBlog, SpecificPost } from 'features';

export const publicRoutes = [
  {
    path: ROUTE_TO_BLOGS,
    Component: Blogs,
  },
  {
    path: ROUTE_TO_SPECIFIC_BLOGS,
    Component: SpecificBlog,
  },
  {
    path: ROUTE_TO_ADD_BLOGS,
    Component: AddBlog,
  },
  {
    path: ROUTE_TO_EDIT_SPECIFIC_BLOG,
    Component: EditBlog,
  },
  {
    path: ROUTE_TO_POSTS,
    Component: Posts,
  },
  {
    path: ROUTE_TO_SPECIFIC_POSTS,
    Component: SpecificPost,
  },
  {
    path: ROUTE_TO_NOT_EXISTING_PAGE,
    Component: PageNotFound,
  },
];
