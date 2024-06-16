import React, { ReactNode } from 'react';
import '../Components.css'

/**
 * Компонент отображения списка ссылок с общим заголовком 
 */

interface CardProps {
  title: string;
  children: ReactNode[];
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className='card-item'>
      <h4>{title}</h4>
      {children}
    </div>
    );
};
