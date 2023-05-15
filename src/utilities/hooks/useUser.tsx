import { useState } from 'react';
import { Registration } from '../interfaces/Registration';
import { axios } from '../axios/axios';
import { User } from '../interfaces/User';
import { handleAxiosError } from '../axios/handleAxiosError';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { QrCode } from '../interfaces/QrCode';

const useUser = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [qrCode, setQrCode] = useState<string>();

  const registerUser = async (data: Registration, callback: () => void) => {
    setIsLoading(true);
    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    await axios
      .post<User>(
        '/api/users',
        {
          ...data,
          profile_picture: data.profile_picture[0],
        },
        headers
      )
      .then((res) => {
        setUser(res.data);
        callback();
        navigate(`/thank-you/${res.data.id}`);
      })
      .catch(handleAxiosError);
    setIsLoading(false);
  };

  const fetchUser = async (user_id: number) => {
    setIsLoading(true);
    await axios
      .get<QrCode>(`/api/user-information/${user_id}`)
      .then((res) => {
        setUser(res.data.user);
        setQrCode(res.data.qrCodeDataUri);
      })
      .catch((e: Error | AxiosError) =>
        handleAxiosError(e, () => setIsError(true))
      );
    setIsLoading(false);
  };

  return {
    user,
    qrCode,
    isLoading,
    isError,
    registerUser,
    fetchUser,
  };
};

export default useUser;
