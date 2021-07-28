import React from 'react';
import Layout from '../../components/layout';
import SectionTitle from '../../components/section-title';
import TeamMemberCard from '../../components/team-member-card';
import * as styles from './styles.module.scss';

const Teams = () => {
  return (
    <Layout>
      <div className={styles.teams}>
        <SectionTitle.Primary center>Meet the team</SectionTitle.Primary>
        <SectionTitle.Secondary center className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, aliquam
          morbi id nisl nulla et pharetra pretium. Nullam dignissim dolor non.
        </SectionTitle.Secondary>
        <TeamMemberCard />
      </div>
    </Layout>
  );
};

export default Teams;
