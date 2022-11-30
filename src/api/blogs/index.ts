import { apiConfig } from 'api';
import { ROUTE_TO_BLOGS, ROUTE_TO_POSTS } from 'common/constants';
import { IBlogResponse, IPostResponse, IResponse } from 'common/types/api';

const defaultPageSize = 5;

export const blogsAPI = {
  getAllBlogs(pageSize = defaultPageSize) {
    return apiConfig.get<IResponse<IBlogResponse[]>>(ROUTE_TO_BLOGS, {
      params: {
        pageSize,
      },
    });
  },
  getAllPostsForSpecificBlogs(id: string) {
    return apiConfig.get<IResponse<IPostResponse[]>>(
      `${ROUTE_TO_BLOGS}/${id}${ROUTE_TO_POSTS}`,
    );
  },
  getSpecificBlog(id: string) {
    return apiConfig.get<IBlogResponse>(`${ROUTE_TO_BLOGS}/${id}`);
  },
};
