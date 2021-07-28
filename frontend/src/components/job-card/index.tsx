import React from 'react';
import { IJob } from '../../utils/interfaces';
import Button from '../_root/button';
import Card from '../_root/card';
import * as styles from './styles.module.scss';

interface Props {
  job: IJob;
}

const JobCard = ({ job }: Props) => {
  return (
    <Card className={styles.jobCard}>
      <div className='jobDetails'>
        <h3>{job.Title}</h3>
        <p className={styles.description}>{job.Description}</p>
        <p className={styles.deadline}>
          deadline: <span>{job.Deadline}</span>
        </p>
      </div>
      <div className='actionButton'>
        <Button.Action>
          <span uk-icon='arrow-right' className={styles.icon}></span>
        </Button.Action>
      </div>
    </Card>
  );
};

export default JobCard;
