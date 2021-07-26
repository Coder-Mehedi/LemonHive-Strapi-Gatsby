import React, { ReactNode } from 'react';
// @ts-ignore
import * as styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  center?: boolean;
}

const SectionTitle = ({ children, center }: Props) => {
  return (
    <h6 className={`${styles.sectionTitle} ${center && styles.center}`}>
      {children}
    </h6>
  );
};
SectionTitle.Primary = ({ children, center }: Props) => {
  return (
    <h1 className={`${styles.primaryTitle} ${center && styles.center}`}>
      {children}
    </h1>
  );
};
SectionTitle.Secondary = ({ children, center }: Props) => {
  return (
    <h1 className={`${styles.secondaryTitle} ${center && styles.center}`}>
      {children}
    </h1>
  );
};

export default SectionTitle;
