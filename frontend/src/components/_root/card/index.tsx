import React from 'react';
import { ReactNode } from 'react';
import * as styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}
const Card = ({ children, className = '' }: Props) => {
  return (
    <div className={`${styles.cardContainer} ${className}`}>{children}</div>
  );
};

export default Card;
