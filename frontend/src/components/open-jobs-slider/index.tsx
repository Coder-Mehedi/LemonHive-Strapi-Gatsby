import React from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import * as styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import Card from '../_root/card';
import Button from '../_root/button';
import { graphql, useStaticQuery } from 'gatsby';
import { IJob } from '../../utils/interfaces';

SwiperCore.use([Pagination]);

const OpenJobsSlider = () => {
  const data = useStaticQuery(query);

  return (
    <div>
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
        {data.allStrapiJob.edges.map(({ node: job }: { node: IJob }) => (
          <SwiperSlide>
            <Card className={styles.jobCard}>
              <div className='jobDetails'>
                <h3>{job.Title}</h3>
                <p className={styles.description}>{job.Description}</p>
                <p className={styles.deadline}>
                  deadline: <span>{job.Deadline}</span>
                </p>
              </div>
              <div className='actionButton'>
                <Button.Action>
                  <span uk-icon='arrow-right' className={styles.icon}></span>
                </Button.Action>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const query = graphql`
  query {
    allStrapiJob {
      edges {
        node {
          id
          Title
          Description
          Deadline
        }
      }
    }
  }
`;

export default OpenJobsSlider;
