/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Image } from 'antd';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './swiper.scss';

import { typeSwiper } from './typeSwipper';

export default function SwipperContainer() {
  const [thumbsSwiper, setThumbsSwiper] = useState<typeSwiper | null>(null);
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-images-slider"
        // style={{
        //     "--swiper-navigation-color": "#fff",
        //     "--swiper-pagination-color": "#fff",
        //   }}
      >
       <SwiperSlide>
          <Image className='slider-image' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='slider-image' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='slider-image' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='slider-image' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image  className='slider-image' src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image  className='slider-image'src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
          <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
