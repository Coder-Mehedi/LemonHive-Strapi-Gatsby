import React from 'react';
import { ReactNode } from 'react';
// @ts-ignore
import * as styles from './styles.module.scss';
interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return <button className={styles.button}>{children}</button>;
};

Button.Action = ({ children }: Props) => {
  return <button className={styles.actionButton}>{children}</button>;
};

export default Button;
