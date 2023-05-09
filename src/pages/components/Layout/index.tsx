import React, { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children: ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='flex items-center justify-center h-screen min-h-screen overflow-auto bg-slate-50 text-slate-700'>
      {children}
      <ToastContainer position='bottom-left' />
    </div>
  );
};

export default Layout;
