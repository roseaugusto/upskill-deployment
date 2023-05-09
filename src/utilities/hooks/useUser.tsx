import { useState } from 'react';
import { Registration } from '../interfaces/Registration';
import { axios } from '../axios/axios';
import { toast } from 'react-toastify';
import { handleAxiosError } from '../axios/handleAxiosError';

const useUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerUser = async (data: Registration, callback: () => void) => {
    setIsLoading(true);
    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    await axios
      .post<Omit<Registration, 'profile_picture'> & { profile_picture: File }>(
        '/api/users',
        {
          ...data,
          profile_picture: data.profile_picture[0],
        },
        headers
      )
      .then(() => {
        toast.success('User successfully registered');
        callback();
      })
      .catch(handleAxiosError);
    setIsLoading(false);
  };

  return { isLoading, registerUser };
};

export default useUser;
