import React from 'react';
import { SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Image = styled.img``;
const SwiperItems = styled.div``;

function ProductComponents(){
  return (
    
    <SwiperSlide><Image src="https://img-cf.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/shop/data/goods/1650353599366l0.jpg"/></SwiperSlide>

  ) 
}

export default ProductComponents;