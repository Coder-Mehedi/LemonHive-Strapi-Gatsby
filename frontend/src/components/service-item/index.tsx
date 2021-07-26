import { Link } from 'gatsby';
import React from 'react';

import * as styles from './styles.module.scss';

interface Props {
  serviceTitle: string;
  description: string;
  imageSrc: string;
}

const ServiceItem = ({ serviceTitle, description, imageSrc }: Props) => {
  return (
    <div className={styles.serviceContainer}>
      <img src={imageSrc} alt='Code Icon' />
      <h3>{serviceTitle}</h3>
      <p>{description}</p>
      <Link to='/'>View Details</Link>
    </div>
  );
};

export default ServiceItem;
