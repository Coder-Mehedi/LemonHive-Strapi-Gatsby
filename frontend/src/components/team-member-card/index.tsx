import React from 'react';
import * as styles from './styles.module.scss';
import { getFullImageUrl } from '../../utils/getFullImageUrl';

interface Props {
  name: string;
  jobRole: string;
  avatarUrl: string;
}

const TeamMemberCard = ({ name, jobRole, avatarUrl }: Props) => {
  return (
    <div className={styles.memberCard}>
      <img src={getFullImageUrl(avatarUrl)} alt='' />
      <h2>{name}</h2>
      <p>{jobRole}</p>
      <hr />
      <div className={styles.socialLinks}>
        <span>fb.</span>
        <span>in.</span>
        <span>be.</span>
        <span>tw.</span>
      </div>
    </div>
  );
};

export default TeamMemberCard;
