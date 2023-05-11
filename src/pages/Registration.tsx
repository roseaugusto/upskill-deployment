import React, { FC } from 'react';
import { QrCodeIcon } from '@heroicons/react/24/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import '../assets/css/Registration.css';
import { useForm } from 'react-hook-form';
import Layout from './components/Layout';
import SunAsterisk from './components/SunAsterisk';
import { RegistrationSchema } from '../utilities/validations/RegistrationSchema';
import { Registration as IRegistration } from '../utilities/interfaces/Registration';
import LoadingIcon from './components/Icons/LoadingIcon';
import useUser from '../utilities/hooks/useUser';

const Registration: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegistration>({
    resolver: yupResolver(RegistrationSchema),
  });
  const { registerUser, isLoading } = useUser();
  const onSubmit = async (data: IRegistration) => {
    await registerUser(data, reset);
  };
  return (
    <Layout>
      <main className='w-full max-w-6xl m-auto px-5'>
        <div className='flex flex-col md:flex-row py-10 md:py-0 space-y-10 md:space-y-0 md:space-x-16 justify-center items-center'>
          <div className='flex flex-col text-left space-y-12'>
            <SunAsterisk />
            <div className='flex flex-col space-y-6'>
              <div className='flex flex-col'>
                <p className='text-6xl font-bold text-gray-700'>
                  A <span className='text-sun_asterisk'>contactless</span>
                </p>
                <p className='text-6xl font-bold text-gray-700'>
                  way to share your
                </p>
                <p className='text-6xl font-bold text-gray-700'>profile.</p>
              </div>
              <p className='text-lg leading-7 font-semibold'>
                Register now and generate your{' '}
                <span className='text-sun_asterisk'>QR Code</span>.
              </p>
            </div>
          </div>
          <div className='flex flex-col w-full max-w-lg rounded-lg shadow-lg p-14 px-16  bg-white'>
            <form
              encType='multipart/form-data'
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col space-y-4'
            >
              <div>
                <label
                  htmlFor='name'
                  className='block mb-1 text-xs font-medium text-gray-700 '
                >
                  Name <span className='text-sun_asterisk'>*</span>
                </label>
                <input
                  {...register('name')}
                  type='text'
                  id='name'
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2 px-2.5'
                  placeholder='John Doe'
                />
                {errors.name && (
                  <label
                    htmlFor='name'
                    className='block mt-1 text-xs text-gray-700 '
                  >
                    <span className='text-sun_asterisk'>
                      {errors.name.message}
                    </span>
                  </label>
                )}
              </div>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-1 text-xs font-medium text-gray-700'
                >
                  Email <span className='text-sun_asterisk'>*</span>
                </label>
                <input
                  {...register('email')}
                  type='email'
                  id='email'
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2 px-2.5'
                  placeholder='johndoe@example.com'
                />
                {errors.email && (
                  <label
                    htmlFor='email'
                    className='block mt-1 text-xs text-gray-700 '
                  >
                    <span className='text-sun_asterisk'>
                      {errors.email.message}
                    </span>
                  </label>
                )}
              </div>
              <div>
                <label
                  htmlFor='contact_number'
                  className='block mb-1 text-xs font-medium text-gray-700'
                >
                  Contact Number <span className='text-sun_asterisk'>*</span>
                </label>
                <input
                  {...register('contact')}
                  type='text'
                  id='contact_number'
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2 px-2.5'
                  placeholder='09xx xxx xxxx'
                />
                {errors.contact && (
                  <label
                    htmlFor='contact_number'
                    className='block mt-1 text-xs text-gray-700 '
                  >
                    <span className='text-sun_asterisk'>
                      {errors.contact.message}
                    </span>
                  </label>
                )}
              </div>
              <div>
                <label
                  htmlFor='address'
                  className='block mb-1 text-xs font-medium text-gray-700'
                >
                  Address <span className='text-sun_asterisk'>*</span>
                </label>
                <input
                  {...register('address')}
                  type='text'
                  id='address'
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2 px-2.5'
                  placeholder='Poblacion, Compostela, Cebu'
                />
                {errors.address && (
                  <label
                    htmlFor='address'
                    className='block mt-1 text-xs text-gray-700 '
                  >
                    <span className='text-sun_asterisk'>
                      {errors.address.message}
                    </span>
                  </label>
                )}
              </div>
              <div>
                <label
                  htmlFor='birthday'
                  className='block mb-1 text-xs font-medium text-gray-700'
                >
                  Birthday <span className='text-sun_asterisk'>*</span>
                </label>
                <input
                  {...register('birthdate')}
                  type='date'
                  id='name'
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2 px-2.5'
                />
                {errors.birthdate && (
                  <label
                    htmlFor='birthday'
                    className='block mt-1 text-xs text-gray-700 '
                  >
                    <span className='text-sun_asterisk'>
                      {errors.birthdate.message}
                    </span>
                  </label>
                )}
              </div>
              <div>
                <label
                  htmlFor='profile_picture'
                  className='block mb-1 text-xs font-medium text-gray-700'
                >
                  Profile Picture <span className='text-sun_asterisk'>*</span>
                </label>
                <input
                  {...register('profile_picture')}
                  className='block w-full text-xs placeholder-gray-400 text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-white focus:outline-none'
                  id='profile_picture'
                  type='file'
                  accept='image/jpeg, image/png'
                />
                {errors.profile_picture && (
                  <label
                    htmlFor='profile_picture'
                    className='block mt-1 text-xs text-gray-700 '
                  >
                    <span className='text-sun_asterisk'>
                      {errors.profile_picture.message}
                    </span>
                  </label>
                )}
              </div>
              <div className='w-full'>
                <button
                  type='submit'
                  disabled={isLoading}
                  className='rounded-md flex w-full items-center disabled:bg-slate-500 justify-center p-2 mt-6 text-sm space-x-2 bg-gray-700 text-white'
                >
                  {isLoading && (
                    <>
                      <LoadingIcon className='w-6 h-6 fill-sun_asterisk' />

                      <span>Loading...</span>
                    </>
                  )}
                  {isLoading || (
                    <>
                      <QrCodeIcon className='h-6 w-6' />
                      <span>Register</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Registration;
