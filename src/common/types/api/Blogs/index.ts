export interface IBlogResponse {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  createdAt: string;
}

export interface IBlogCreateData {
  name: string;
  description: string;
  websiteUrl: string;
}

export interface IBlogCreateResponse {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  createdAt: string;
}

export interface IBlogCreateIncorrectValueResponse {
  errorsMessages: [
    {
      message: string;
      field: string;
    },
  ];
}
