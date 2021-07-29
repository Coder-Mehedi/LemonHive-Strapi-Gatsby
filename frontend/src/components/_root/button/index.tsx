import React from 'react';
import { ReactNode } from 'react';
// @ts-ignore
import * as styles from './styles.module.scss';
interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => {};
}

const Button = ({ children, className = '', onClick }: Props) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

Button.Action = ({ children, className = '' }: Props) => {
  return (
    <button className={`${styles.actionButton} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
