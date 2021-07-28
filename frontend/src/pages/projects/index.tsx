import React from 'react';
import Layout from '../../components/layout';
import SectionTitle from '../../components/section-title';
import * as styles from './styles.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { IProject } from '../../utils/interfaces';
import { getFullImageUrl } from '../../utils/getFullImageUrl';

const Projects = () => {
  const data = useStaticQuery(query);
  return (
    <Layout>
      <div className='container'>
        <SectionTitle.Primary center>our work</SectionTitle.Primary>
        <SectionTitle.Secondary center className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, aliquam
          morbi id nisl nulla et pharetra pretium. Nullam dignissim dolor non.
        </SectionTitle.Secondary>
      </div>
      <section className={styles.projects}>
        <div className={styles.projectImageContainer}>
          {data.allStrapiProject.edges.map(
            ({ node: project }: { node: IProject }) => (
              <img src={getFullImageUrl(project.image.url)} />
            )
          )}
        </div>
      </section>
    </Layout>
  );
};
const query = graphql`
  query {
    allStrapiProject {
      edges {
        node {
          id
          image {
            url
          }
        }
      }
    }
  }
`;
export default Projects;
