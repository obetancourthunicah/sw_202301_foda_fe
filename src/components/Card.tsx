import {FC, PropsWithChildren} from 'react';
import './Card.css';
export const Card : FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};
