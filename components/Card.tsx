import React from 'react';
import { CardProps } from '@/types/props';

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
