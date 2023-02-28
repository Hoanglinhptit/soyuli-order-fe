/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { Carousel } from 'antd';
import styled from 'styled-components';
import furniture from '../../assets/carousel/furniture.svg';
import acessories from '../../assets/carousel/acessories.svg'
import clothes from '../../assets/carousel/clothes.svg'
import houseware from '../../assets/carousel/houseware.svg'
import shoes from  '../../assets/carousel/shoes.svg'

const Style = styled(Carousel)`
 
   > .slick-dots li button {
    width: 20px;
    height: 10px;
    background: #9B837C;
  
    
  }
  > .slick-dots li.slick-active button {
    width: 20px;
    height: 10px;
    background: #472B22;
    
  }
`;

export default function CarouselWrapper() {
  return (
    <div >
      <Style autoplay className='carousel-container'>
        <img src={furniture} />
        <img src={acessories} />
        <img src={clothes} />
        <img src={houseware} />
        <img src={shoes} />
      </Style>
    </div>
  );
}
