import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import '../assets/scss/main.scss';
import * as styles from './styles.module.scss';
import bannerImg from '../assets/images/banner-image.png';
import codeIcon from '../assets/icons/code.svg';
import Button from '../components/_root/button';
import SectionTitle from '../components/section-title';
import ServiceItem from '../components/service-item';
import ProjectSlider from '../components/project-slider';
import OpenJobsSlider from '../components/open-jobs-slider';
import { IService } from '../utils/interfaces';
import { getFullImageUrl } from '../utils/getFullImageUrl';

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <section className={styles.banner}>
        <div className={styles.hero}>
          <div className={styles.contentArea}>
            <h1>
              We Help Awesome Brands, <span>Find Brilliant Customers</span>
            </h1>
            <p>
              Lemon Hive is a marketing agency for ambitious companies who want
              to accelerate their growth.
            </p>
            <Button className={styles.aboutUsButton}>About Us</Button>
          </div>
          <div className={styles.bannerImg}>
            <img src={bannerImg} alt='' className={styles.topImage} />
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className={styles.container}>
          <SectionTitle>Our services_</SectionTitle>
          <SectionTitle.Primary>Our services</SectionTitle.Primary>
          <SectionTitle.Secondary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit a aliquam
            morbi.
          </SectionTitle.Secondary>
          <div className={styles.serviceItemContainer}>
            {data.allStrapiService.edges.map(
              ({ node: service }: { node: IService }) => (
                <ServiceItem
                  key={service.id}
                  serviceTitle={service.title}
                  description={service.description}
                  imageSrc={getFullImageUrl(service.icon.url)}
                />
              )
            )}
          </div>
        </div>
      </section>
      <section className={styles.latestProject}>
        <SectionTitle center>Our projects_</SectionTitle>
        <SectionTitle.Primary center>latest projects</SectionTitle.Primary>
        <SectionTitle.Secondary center>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit a aliquam
          morbi.
        </SectionTitle.Secondary>
        <div className='container'>
          <ProjectSlider />
        </div>
      </section>
      <section className={styles.career}>
        <div className='container'>
          <SectionTitle center>career_</SectionTitle>
          <SectionTitle.Primary center>open job position</SectionTitle.Primary>
          <SectionTitle.Secondary center>
            Want to join our team, please submit your documents
          </SectionTitle.Secondary>
          <OpenJobsSlider />
        </div>
      </section>
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiService {
      edges {
        node {
          id
          title
          description
          icon {
            url
          }
        }
      }
    }

    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;

export default IndexPage;
