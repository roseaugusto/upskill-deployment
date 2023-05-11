import Axios, { AxiosInstance } from 'axios';

export const axios: AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_ORIGIN,
  headers: {
    Accept: 'application/json',
  },
});
