import React, { lazy, Suspense } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainBn } from '../constants/MainBn'
import styled from "styled-components";
import ItemSkeleton from './product/ItemSkeleton'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ItemProduct = lazy(() => import('./product/Item'));

const Wrap = styled.div``;
const H1 = styled.h1`
  text-align:center;
  font-size:25px;
  margin-bottom:15px;
`;
const Tag = styled.span`
  display:block;
`
const Image = styled.img``;

function MainSwiper(){
  return (    
    <Wrap className='mainSwiper'>
      <Suspense fallback={<ItemSkeleton/>}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          slidesPerView={1}
          centeredSlides
          spaceBetween={0}
          pagination={{
            type: 'fraction', 
          }}
          navigation={true}
          className="mySwiper"
        >
          {
            MainBn.map((item) => (
              <SwiperSlide key={item.id}>              
                <Tag><Image src={item.img} /></Tag>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Suspense>
    </Wrap>
  )
}
export default MainSwiper;