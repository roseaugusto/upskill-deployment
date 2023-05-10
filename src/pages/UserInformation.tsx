import React, { FC } from 'react';
import '../assets/css/UserInformation.css';
import Layout from './components/Layout';
import SunAsterisk from './SunAsterisk';

const UserInformation: FC = () => {
  return (
    <Layout>
      <main className='flex items-center flex-col justify-center bg-gray-200 p-28'>
        <SunAsterisk />
        <p className='text-gray-600 font-semibold text-4xl pt-5'>User Info</p>
        <div className='flex flex-row align border-1 shadow-md '>
          <div className='py-20 px-32'>
            <img
              className='h-52 w-52 mb-6'
              src={process.env.PUBLIC_URL + 'images/user.svg'}
              alt=''
            />
            <div className='text-xl font-bold p-1.5'>
              John <span className='suns-color'>Doe</span>
            </div>
            <div className='flex flex-row p-1.5'>
              <img src={process.env.PUBLIC_URL + 'images/Home.svg'} alt='' />{' '}
              <span className='pl-6'> Nasipit, Talamban, Cebu</span>
            </div>
            <div className='flex flex-row p-1.5'>
              <img src={process.env.PUBLIC_URL + 'images/Date.svg'} alt='' />{' '}
              <span className='pl-6'> May, 5 2023</span>
            </div>
            <div className='text-xs font-semibold p-1.5'>
              <span className='suns-color'>CONTACT</span> INFORMATION
            </div>
            <div className='flex flex-row p-1.5'>
              <img src={process.env.PUBLIC_URL + 'images/Email.svg'} alt='' />{' '}
              <span className='pl-6'>johndoe@gmail.com</span>
            </div>
            <div className='flex flex-row p-1.5'>
              <img src={process.env.PUBLIC_URL + 'images/Phone.svg'} alt='' />{' '}
              <span className='pl-6'>09123456789</span>
            </div>
          </div>
          <div className='py-20 px-32'>
            <img src={process.env.PUBLIC_URL + 'images/QRcode.svg'} alt='' />

            <button
              type='submit'
              className='border-gray-700 border-2 hover:border-gray-500 rounded-md flex w-full items-center justify-center p-2 mt-6 text-sm space-x-2 '
            >
              <img
                src={process.env.PUBLIC_URL + 'images/Download.svg'}
                alt=''
              />
              <span className='text-gray-700'>Download QR Code</span>
            </button>
            <button
              type='submit'
              className='bg-blue-gray-700 border-2 hover:border-gray-500 rounded-md flex w-full items-center justify-center p-2 mt-6 text-sm space-x-2 !'
            >
              <img src={process.env.PUBLIC_URL + 'images/Archive.svg'} alt='' />
              <span className='text-current'>Download QR Code</span>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default UserInformation;
