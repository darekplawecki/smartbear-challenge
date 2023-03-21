import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { FontSize } from '../../../types/style';

type ParagraphProps = {
  size?: FontSize;
  className?: string;
};

const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
  size = 'base',
  children,
  className = '',
}) => {
  return (
    <h1 className={`text-${size} text-gray-900 ${className}`}>{children}</h1>
  );
};

export default Paragraph;
