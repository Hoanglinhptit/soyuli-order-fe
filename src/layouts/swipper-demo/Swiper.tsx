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
        loop={true}
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
          <Image
            className="slider-image"
            // src="https://swiperjs.com/demos/images/nature-1.jpg"
            src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slider-image"
            src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slider-image"
            src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slider-image"
            src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slider-image"
            src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slider-image"
            src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        loop={true}
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
            <img
              // src="https://swiperjs.com/demos/images/nature-1.jpg"
              src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://soyuli-order-photos.s3.us-east-2.amazonaws.com/anh_do_su/mau-hong.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
