import React, { FC } from 'react';

type BadgeProps = {
  size?: 'xs' | 'sm' | 'base';
  className?: string;
  label: string;
};

const Badge: FC<BadgeProps> = ({ size = 'base', label, className = '' }) => {
  return (
    <span
      className={`text-${size} rounded-full font-medium py-0.5 px-3 text-gray-50 bg-gray-600 ${className}`}
    >
      {label}
    </span>
  );
};

export default Badge;
