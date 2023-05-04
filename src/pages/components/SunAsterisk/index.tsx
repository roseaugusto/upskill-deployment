import React, { FC } from 'react';

const SunAsterisk: FC = () => {
  return (
    <div className='flex items-center space-x-2'>
      <p className=' text-sun_asterisk font-semibold text-3xl'>Sun*</p>
      <p className='text-gray-700'>|</p>
      <p className='text-gray-700 leading-6'>Information System</p>
    </div>
  );
};

export default SunAsterisk;
