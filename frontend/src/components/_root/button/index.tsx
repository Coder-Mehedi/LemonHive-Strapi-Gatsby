import React from 'react';
import { ReactNode } from 'react';
// @ts-ignore
import * as styles from './styles.module.scss';
interface Props {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className = '' }: Props) => {
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
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
