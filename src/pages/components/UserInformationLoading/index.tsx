import React from 'react';
import ImageSkeletonIcon from '../Icons/ImageSkeletonIcon';
import BarSkeletonIcon from '../Icons/BarSkeletonIcon';
import { PhotoIcon } from '@heroicons/react/24/solid';

const UserInformationLoading = () => {
  return (
    <>
      <div className='py-20 px-32 w-full max-w-lg mx-auto'>
        <ImageSkeletonIcon className='h-52 w-52 mb-6' />
        <BarSkeletonIcon className='h-2.5 w-40 rounded-full' />
        <BarSkeletonIcon className='h-2.5 w-52 rounded-full mt-1 mb-3' />
        <div className='flex flex-row items-center p-1.5'>
          <PhotoIcon className='w-6 h-6 animate-pulse fill-gray-300' />
          <div className='flex flex-col space-y-1 pl-6'>
            <BarSkeletonIcon className='h-1.5 w-32 rounded-full' />
            <BarSkeletonIcon className='h-1.5 w-36 rounded-full' />
          </div>
        </div>
        <div className='flex flex-row items-center p-1.5'>
          <PhotoIcon className='w-6 h-6 animate-pulse fill-gray-300' />
          <div className='flex flex-col space-y-1 pl-6'>
            <BarSkeletonIcon className='h-1.5 w-32 rounded-full' />
            <BarSkeletonIcon className='h-1.5 w-36 rounded-full' />
          </div>
        </div>
        <div className='text-xs font-semibold p-1.5'>
          <BarSkeletonIcon className='h-2.5 w-40 rounded-full' />
        </div>
        <div className='flex flex-row items-center p-1.5'>
          <PhotoIcon className='w-6 h-6 animate-pulse fill-gray-300' />
          <div className='flex flex-col space-y-1 pl-6'>
            <BarSkeletonIcon className='h-1.5 w-32 rounded-full' />
            <BarSkeletonIcon className='h-1.5 w-36 rounded-full' />
          </div>
        </div>
        <div className='flex flex-row items-center p-1.5'>
          <PhotoIcon className='w-6 h-6 animate-pulse fill-gray-300' />
          <div className='flex flex-col space-y-1 pl-6'>
            <BarSkeletonIcon className='h-1.5 w-32 rounded-full' />
            <BarSkeletonIcon className='h-1.5 w-36 rounded-full' />
          </div>
        </div>
      </div>
      <div className='py-20 px-32 max-w-lg mx-auto'>
        <ImageSkeletonIcon className='h-52 w-52 mb-6' />
        <BarSkeletonIcon className='h-10 rounded-md mt-6' />
        <BarSkeletonIcon className='h-10 rounded-md mt-6' />
      </div>
    </>
  );
};

export default UserInformationLoading;
