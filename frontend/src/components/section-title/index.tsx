import React, { ReactNode } from 'react';
// @ts-ignore
import * as styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ children, center }: Props) => {
  return (
    <h6 className={`${styles.sectionTitle} ${center && styles.center}`}>
      {children}
    </h6>
  );
};
SectionTitle.Primary = ({ children, center, className }: Props) => {
  return (
    <h1
      className={`${styles.primaryTitle} ${
        center && styles.center
      } ${className}`}
    >
      {children}
    </h1>
  );
};
SectionTitle.Secondary = ({ children, center, className }: Props) => {
  return (
    <p
      className={`${styles.secondaryTitle} ${
        center && styles.center
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default SectionTitle;
