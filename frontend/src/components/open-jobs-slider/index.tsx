import React from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import * as styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import Card from '../_root/card';
import Button from '../_root/button';

SwiperCore.use([Pagination]);

const OpenJobsSlider = () => {
  return (
    <div className={styles.sliderArea}>
      <Swiper
        pagination={{ clickable: true }}
        className='mySwiper'
        slidesPerView={3}
        spaceBetween={30}
      >
        <SwiperSlide>
          <Card className={styles.jobCard}>
            <div className='jobDetails'>
              <h3>software engineer</h3>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                viverra risus ac elit varius id augue posuere.
              </p>
              <p className={styles.deadline}>
                deadline: <span>29 november, 2020</span>
              </p>
            </div>
            <div className='actionButton'>
              <Button.Action>
                <span uk-icon='arrow-right' className={styles.icon}></span>
              </Button.Action>
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OpenJobsSlider;
