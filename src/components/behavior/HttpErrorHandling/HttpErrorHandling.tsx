import { FunctionComponent } from 'react';
import axios, {AxiosError} from 'axios';

export const HttpErrorHandling: FunctionComponent = () => {
  axios.interceptors.response.use(undefined, function (error: AxiosError) {
    const statusCode = error.response ? error.response.status : null;

    let message = '';

    switch (statusCode) {
      case 401:
        message = 'HANDLING - 401';
        break;
      case 404:
        message = 'HANDLING - 404';
        break;
      default:
        message = 'HANDLING - DEFAULT';
    }

    console.error(message);
  
    return Promise.reject(error);
  })

  return null;
};

