/* eslint-disable no-underscore-dangle */
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

type Props = {
  image: [
    {
      _id: string;
      url: string;
      fileName: string;
      isPriority: boolean;
    }
  ];
};

export default function SwipperContainer({ image }: Props) {
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
      >
        {image?.map((e) => (
          <SwiperSlide key={e._id}>
            <Image className="slider-image" src={e.url} />
          </SwiperSlide>
        ))}
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
        {image?.map((e) => (
          <SwiperSlide key={e._id}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={e.url} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
