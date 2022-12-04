import { apiConfig } from 'api/configAPI';
import { ROUTE_TO_BLOGS, ROUTE_TO_POSTS } from 'common/constants';
import {
  IBlogResponse,
  IBlogCreateData,
  IBlogCreateResponse,
} from 'common/types/api/Blogs';
import { IResponse } from 'common/types/api/CommonApiTypes';
import { IPostResponse } from 'common/types/api/Posts';

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
  createBlog(data: IBlogCreateData) {
    return apiConfig.post<IBlogCreateResponse>(
      ROUTE_TO_BLOGS,
      { ...data },
      {
        auth: {
          username: 'admin',
          password: 'qwerty',
        },
      },
    );
  },
  deleteBlog(blogID: string) {
    return apiConfig.delete<{}>(`${ROUTE_TO_BLOGS}/${blogID}`, {
      auth: {
        username: 'admin',
        password: 'qwerty',
      },
    });
  },
};
