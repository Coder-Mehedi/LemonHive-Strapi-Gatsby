import React from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';

import { graphql, useStaticQuery } from 'gatsby';
import { IJob } from '../../utils/interfaces';
import JobCard from '../job-card';

SwiperCore.use([Pagination]);

const OpenJobsSlider = () => {
  const data = useStaticQuery(query);

  return (
    <div style={{ overflow: 'hidden' }}>
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
            slidesPerView: 2,
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
            <JobCard job={job} />
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
