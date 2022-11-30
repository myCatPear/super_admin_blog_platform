import {
  ROUTE_TO_BLOGS,
  ROUTE_TO_NOT_EXISTING_PAGE,
  ROUTE_TO_POSTS,
  ROUTE_TO_SPECIFIC_BLOGS,
  ROUTE_TO_SPECIFIC_POSTS,
} from 'common/constants';
import { PageNotFound } from 'components';
import { Blogs, Posts, SpecificBlog, SpecificPost } from 'features';

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
