import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { FontSize } from '../../../types/style';

type HeadlineProps = {
  size?: FontSize;
  className?: string;
};

const Headline: FC<PropsWithChildren<HeadlineProps>> = ({
  size = 'base',
  children,
  className = '',
}) => {
  return (
    <h1
      className={`text-${size} font-bold tracking-tight text-gray-900 ${className}`}
    >
      {children}
    </h1>
  );
};

export default Headline;
