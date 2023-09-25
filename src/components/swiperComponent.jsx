import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styled from "styled-components";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Wrap = styled.div``;
const H1 = styled.h1`
  text-align:center;
  font-size:25px;
  margin-bottom:15px;
`;
const Image = styled.img``;
const ProductTitle = styled.div``;
const DimmedPrice = styled.div`
  color: rgb(181, 181, 181);
  text-decoration: line-through;
  margin-top:10px;
`;
const Price = styled.div`
  margin-top:5px;
  font-weight:bold;
  em{
    margin-right:5px;
    font-style:normal;
    color:rgb(250, 98, 47)
  }
`;

export default () =>{
  return (
    <Wrap>
      <H1>TODAY BEST</H1>      
      <Swiper id="swiperId"
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        loop={true}
        autoplay={{ 
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // navigation {/*좌우 버튼*/}
        pagination={{ clickable: true }}        
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
          <Image src="https://img-cf.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/shop/data/goods/1650353599366l0.jpg"/>
          <ProductTitle>[바나나] 탄력 3종 세트 (쇼핑백+쿠폰19760원+적립6612원)</ProductTitle>
          <DimmedPrice>290,0000원</DimmedPrice>
          <Price><em>20%</em>190,000원</Price>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://img-cf.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/shop/data/goods/1538466010000_l.jpg"/>
          <ProductTitle>[바나나] 탄력 3종 세트 (쇼핑백+쿠폰19760원+적립6612원)</ProductTitle>
          <DimmedPrice>290,0000원</DimmedPrice>
          <Price><em>20%</em>190,000원</Price>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/23f60f00-fd03-42fb-a9a0-e1ebfab69c12.jpg"/>
          <ProductTitle>[바나나] 탄력 3종 세트 (쇼핑백+쿠폰19760원+적립6612원)</ProductTitle>
          <DimmedPrice>290,0000원</DimmedPrice>
          <Price><em>20%</em>190,000원</Price>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/8a6350bf-a333-47e2-a4c0-38fe84371f37.jpg"/>
          <ProductTitle>[바나나] 탄력 3종 세트 (쇼핑백+쿠폰19760원+적립6612원)</ProductTitle>
          <DimmedPrice>290,0000원</DimmedPrice>
          <Price><em>20%</em>190,000원</Price>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://3p-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/files/cc1ac6f0-81f6-473c-899d-edf544e3ea7a/ce1b6e83-1cda-472a-b17f-4c7c1aa11cfe.jpg"/>
          <ProductTitle>[바나나] 탄력 3종 세트 (쇼핑백+쿠폰19760원+적립6612원)</ProductTitle>
          <DimmedPrice>290,0000원</DimmedPrice>
          <Price><em>20%</em>190,000원</Price>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/022b8205-dd18-4692-b13a-d362d91d93e5.jpg"/>
          <ProductTitle>[바나나] 탄력 3종 세트 (쇼핑백+쿠폰19760원+적립6612원)</ProductTitle>
          <DimmedPrice>290,0000원</DimmedPrice>
          <Price><em>20%</em>190,000원</Price>
        </SwiperSlide>
      </Swiper>
    </Wrap>
  )
}