import React from 'react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import '../assets/scss/variables.scss';
import '../assets/scss/main.scss';
import * as styles from './styles.module.scss';
import bannerImg from '../assets/images/banner-img.png';
import bannerCircle from '../assets/images/banner-circle.png';
import sliderImg from '../assets/images/PathDxp-Design-v2.png';
import codeIcon from '../assets/icons/code.svg';
import pencilAndRuler from '../assets/icons/pencil-and-ruler.svg';
import Button from '../components/_root/button';
import SectionTitle from '../components/section-title';
import ServiceItem from '../components/service-item';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination]);

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
          <SectionTitle.Primary>Our services</SectionTitle.Primary>
          <SectionTitle.Secondary>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit a aliquam
            morbi.
          </SectionTitle.Secondary>
          <div className={styles.serviceItemContainer}>
            {data.allStrapiService.edges.map((service: any) => (
              <ServiceItem
                key={service.node.id}
                serviceTitle={service.node.title}
                description={service.node.description}
                imageSrc={codeIcon}
              />
            ))}
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
        <div className={styles.sliderArea}>
          <Swiper
            pagination={{ clickable: true }}
            className='mySwiper'
            slidesPerView={3}
            spaceBetween={30}

            // centerInsufficientSlides
          >
            <SwiperSlide>
              <img src={sliderImg} className={styles.sliderImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg} className={styles.sliderImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg} className={styles.sliderImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg} className={styles.sliderImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg} className={styles.sliderImg} />
            </SwiperSlide>
          </Swiper>
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
