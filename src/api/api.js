import axios from 'axios';
import { BASE_URL, API_KEY } from '../config/config';

export const getRequest = async (url) => {
  const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`;
  const response = await axios.get(API_URL)
  return response.data
};