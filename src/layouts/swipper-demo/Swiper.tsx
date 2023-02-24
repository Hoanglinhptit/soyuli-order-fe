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
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332912286_577285407645428_7374970761107200494_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=H3BlV4yQSiYAX_zcDEv&tn=IPWnoL_hYPCd4fyy&_nc_ht=scontent.fhan18-1.fna&oh=00_AfC2ynC31UqUrWpy90P3Y5r4Vm-mNMBx5KOGVPpYn7qU5g&oe=63FCCB4A"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slider-image"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332938232_1439983980088986_2220113477301139170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=k66mxe_9mfsAX_wQU5v&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDWPUWXXr2l85YAEP5U_v_xqZVIIZrnRMNpA9A_ucQPSQ&oe=63FDF04D"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slider-image"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332864812_580451997363155_8691072056937501795_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=x18c5QpToHAAX_a80_1&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBAPbgDJT3mW4nX_BWW_jxZ5tzOAN7Vs3Q7u_iWtVPNoQ&oe=63FD27ED"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slider-image"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332696907_715268456978874_8433812892560934274_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=U_7OnDIoSkQAX9dqQta&tn=IPWnoL_hYPCd4fyy&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDy_Jh6wxrN-lSNLvEHtj8O4unA_j142G_F6yRAbyczsg&oe=63FDC38E"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slider-image"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332747577_1259901934925443_593718463218965739_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=fw8rUpg153cAX-DcFY6&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBvlddVpIV9d2sCzOv06u2_-P6alvzkuW_PfZSUbunjCg&oe=63FD17CA"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="slider-image"
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332385372_896866798311177_5248917136911592986_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=sL5LO3f8eiwAX-LY1PS&_nc_ht=scontent.fhan18-1.fna&oh=00_AfAYCmj4CS7QVS8tbr78Xvb-SfxZ_wVlU1nsrC4vmCG7lg&oe=63FCCCE3"
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
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332912286_577285407645428_7374970761107200494_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=H3BlV4yQSiYAX_zcDEv&tn=IPWnoL_hYPCd4fyy&_nc_ht=scontent.fhan18-1.fna&oh=00_AfC2ynC31UqUrWpy90P3Y5r4Vm-mNMBx5KOGVPpYn7qU5g&oe=63FCCB4A"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332938232_1439983980088986_2220113477301139170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=k66mxe_9mfsAX_wQU5v&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDWPUWXXr2l85YAEP5U_v_xqZVIIZrnRMNpA9A_ucQPSQ&oe=63FDF04D" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332864812_580451997363155_8691072056937501795_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=x18c5QpToHAAX_a80_1&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBAPbgDJT3mW4nX_BWW_jxZ5tzOAN7Vs3Q7u_iWtVPNoQ&oe=63FD27ED" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332696907_715268456978874_8433812892560934274_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=U_7OnDIoSkQAX9dqQta&tn=IPWnoL_hYPCd4fyy&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDy_Jh6wxrN-lSNLvEHtj8O4unA_j142G_F6yRAbyczsg&oe=63FDC38E" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332747577_1259901934925443_593718463218965739_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=fw8rUpg153cAX-DcFY6&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBvlddVpIV9d2sCzOv06u2_-P6alvzkuW_PfZSUbunjCg&oe=63FD17CA" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332385372_896866798311177_5248917136911592986_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=sL5LO3f8eiwAX-LY1PS&_nc_ht=scontent.fhan18-1.fna&oh=00_AfAYCmj4CS7QVS8tbr78Xvb-SfxZ_wVlU1nsrC4vmCG7lg&oe=63FCCCE3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
