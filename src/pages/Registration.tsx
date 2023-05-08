import React, { FC } from 'react';
import { QrCodeIcon } from '@heroicons/react/24/solid';
import '../assets/css/Registration.css';
import { useForm } from 'react-hook-form';
import Layout from './components/Layout';
import SunAsterisk from './components/SunAsterisk';

type FormValues = {
  name: string;
  email: string;
  contact_number: string;
  address: string;
  birthday: Date;
  profile_picture: File;
};

const Registration: FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => alert(JSON.stringify(data));
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
                  required
                />
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
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='contact_number'
                  className='block mb-1 text-xs font-medium text-gray-700'
                >
                  Contact Number <span className='text-sun_asterisk'>*</span>
                </label>
                <input
                  {...register('contact_number')}
                  type='text'
                  id='contact_number'
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2 px-2.5'
                  placeholder='09xx xxx xxxx'
                  required
                />
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
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='birthday'
                  className='block mb-1 text-xs font-medium text-gray-700'
                >
                  Birthday <span className='text-sun_asterisk'>*</span>
                </label>
                <input
                  {...register('birthday')}
                  type='date'
                  id='name'
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-500 focus:border-gray-500 block w-full p-2 px-2.5'
                  required
                />
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
                  required
                />
              </div>
              <div className='w-full'>
                <button
                  type='submit'
                  className='rounded-md flex w-full items-center justify-center p-2 mt-6 text-sm space-x-2 bg-gray-700 text-white'
                >
                  <QrCodeIcon className='h-6 w-6' />
                  <span>Register</span>
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
