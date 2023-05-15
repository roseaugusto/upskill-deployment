import React, { FC } from 'react';

type Props = {
  className?: string;
};

const BarSkeletonIcon: FC<Props> = ({ className }): JSX.Element => {
  return <div className={`${className} bg-gray-200 animate-pulse`}></div>;
};

export default BarSkeletonIcon;
