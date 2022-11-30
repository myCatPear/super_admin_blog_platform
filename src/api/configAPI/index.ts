import axios from 'axios';
// https://homework2-six.vercel.app/api
export const apiConfig = axios.create({
  baseURL: 'https://02task.vercel.app/',
});
