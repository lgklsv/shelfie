import axios from 'axios';
import { BASE_URL } from 'app/config';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
});
