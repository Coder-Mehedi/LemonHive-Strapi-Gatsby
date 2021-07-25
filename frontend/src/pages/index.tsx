import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import '../assets/scss/main.scss';
// @ts-ignore
import * as styles from './styles.module.scss';
// @ts-ignore
import bannerImg from '../assets/images/banner-img.png';
// @ts-ignore
import bannerCircle from '../assets/images/banner-circle.png';
import Button from '../components/_root/button';
import SectionTitle from '../components/section-title';
const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <section className={styles.banner}>
        <div className={styles.contentArea}>
          <h1>
            We Help Awesome Brands, <span>Find Brilliant Customers</span>
          </h1>
          <p>
            Lemon Hive is a marketing agency for ambitious companies who want to
            accelerate their growth.
          </p>
          <Button>About Us</Button>
        </div>
        <div className={styles.bannerImg}>
          <img src={bannerImg} alt='' className={styles.topImage} />
          <img src={bannerCircle} alt='' className={styles.circle} />
        </div>
      </section>
      <section className={styles.services}>
        <div className={styles.container}>
          <SectionTitle>Our services_</SectionTitle>
        </div>
      </section>
    </Layout>
  );
};

const query = graphql`
  query {
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
    allStrapiArticle {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }

          author {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30, height: 30)
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
