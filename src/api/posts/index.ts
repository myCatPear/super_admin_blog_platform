import { apiConfig } from 'api/configAPI';
import { ROUTE_TO_POSTS } from 'common/constants';
import { IPostResponse, IResponse } from 'common/types/api';

export const postsAPI = {
  getAllPosts() {
    return apiConfig.get<IResponse<IPostResponse[]>>(ROUTE_TO_POSTS);
  },
  getSpecificPost(id: string) {
    return apiConfig.get<IPostResponse>(`${ROUTE_TO_POSTS}/${id}`);
  },
};
