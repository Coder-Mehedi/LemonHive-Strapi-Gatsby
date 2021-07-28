import React from 'react';
import Layout from '../../components/layout';
import SectionTitle from '../../components/section-title';
import TeamMemberCard from '../../components/team-member-card';
import * as styles from './styles.module.scss';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import { ITeamMember } from '../../utils/interfaces';

const Teams = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <div className={styles.teams}>
        <SectionTitle.Primary center>Meet the team</SectionTitle.Primary>
        <SectionTitle.Secondary center className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, aliquam
          morbi id nisl nulla et pharetra pretium. Nullam dignissim dolor non.
        </SectionTitle.Secondary>
        <div className={`container ${styles.membersContainer}`}>
          {data.allStrapiTeamMember.edges.map(
            ({ node: member }: { node: ITeamMember }) => (
              <TeamMemberCard
                name={member.name}
                jobRole={member.job_role}
                avatarUrl={member.avatar.url}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiTeamMember {
      edges {
        node {
          id
          job_role
          name
          avatar {
            url
          }
        }
      }
    }
  }
`;

export default Teams;
