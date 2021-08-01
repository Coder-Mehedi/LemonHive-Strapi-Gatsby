import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';
import SectionTitle from '../../components/section-title';
import ReactMarkdown from 'react-markdown';
import { getFullImageUrl } from '../../utils/getFullImageUrl';
import * as styles from './styles.module.scss';

const About = () => {
  const data = useStaticQuery(query);
  return (
    <Layout>
      <SectionTitle.Primary center className={styles.pageTitle}>
        About Us
      </SectionTitle.Primary>
      <div className={styles.descriptionArea}>
        <div className={styles.aboutUsDescription}>
          <ReactMarkdown
            children={data.strapiAboutpage.description}
            transformImageUri={(uri) => getFullImageUrl(uri)}
          />
        </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiAboutpage {
      id
      description
    }
  }
`;

export default About;
