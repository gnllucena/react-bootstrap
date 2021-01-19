import { FunctionComponent } from 'react';
import axios, { AxiosError } from 'axios';

const HttpErrorHandling: FunctionComponent = () => {
  axios.interceptors.response.use(undefined, (error: AxiosError) => {
    const statusCode = error.response ? error.response.status : null;

    switch (statusCode) {
      case 404:
      case 500:
      default:
        return Promise.reject(error);
    }
  });

  return null;
};

export default HttpErrorHandling;
