import React, { ReactNode } from 'react';
// @ts-ignore
import * as styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

const SectionTitle = ({ children }: Props) => {
  return <h6 className={styles.sectionTitle}>{children}</h6>;
};
SectionTitle.Primary = ({ children }: Props) => {
  return <h1 className={styles.primaryTitle}>{children}</h1>;
};

export default SectionTitle;
