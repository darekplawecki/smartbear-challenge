import React, { FC, PropsWithChildren } from 'react';
import { FontSize } from '../../../types/style';

type LinkProps = {
  href: string;
  size?: FontSize;
  className?: string;
};

const Link: FC<PropsWithChildren<LinkProps>> = ({
  size = 'base',
  href,
  children,
  className = '',
}) => {
  return (
    <a
      href={href}
      className={`text-${size} font-medium text-indigo-600 hover:text-indigo-500 ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
