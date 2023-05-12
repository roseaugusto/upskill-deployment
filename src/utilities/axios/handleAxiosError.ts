import { AxiosError, isAxiosError } from 'axios';
import { toast } from 'react-toastify';

export const handleAxiosError = (
  error: Error | AxiosError,
  callback: () => void = () => null
) => {
  if (isAxiosError(error)) {
    toast.error(error.response?.data.message || error.message);
    callback();
  }
};
