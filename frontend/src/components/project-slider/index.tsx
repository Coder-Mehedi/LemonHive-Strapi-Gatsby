import React from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import * as styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import sliderImg from '../../assets/images/PathDxp-Design-v2.png';

SwiperCore.use([Pagination]);

const ProjectSlider = () => {
  return (
    <div className={styles.sliderArea}>
      <Swiper
        pagination={{ clickable: true }}
        className='mySwiper'
        slidesPerView={3}
        spaceBetween={30}
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
  );
};

export default ProjectSlider;
