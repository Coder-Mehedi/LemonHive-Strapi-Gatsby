import React from 'react';
import Card from '../_root/card';
import * as styles from './styles.module.scss';
import teamMember1 from '../../assets/images/team-member-1.png';

const TeamMemberCard = () => {
  return (
    <div className={styles.memberCard}>
      <img src={teamMember1} alt='' />
      <h2>Darrell Steward</h2>
      <p>software engineer</p>
      <hr />
      <div className='socialLinks'>fb.</div>
    </div>
  );
};

export default TeamMemberCard;
