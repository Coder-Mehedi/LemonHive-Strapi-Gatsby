import React from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import * as styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import { graphql, Link } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import { IProject } from '../../utils/interfaces';
import { getFullImageUrl } from '../../utils/getFullImageUrl';

SwiperCore.use([Pagination]);

const ProjectSlider = () => {
  const data = useStaticQuery(query);
  return (
    <div className={styles.sliderArea}>
      <Swiper
        pagination={{ clickable: true }}
        className='mySwiper'
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1365: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {data.allStrapiProject.edges.map(
          ({ node: project }: { node: IProject }) => (
            <SwiperSlide>
              <img src={getFullImageUrl(project.image.url)} />
            </SwiperSlide>
          )
        )}
      </Swiper>
      <Link to='/projects' className={styles.allProjectLink}>
        View All Projects
      </Link>
    </div>
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

export default ProjectSlider;
