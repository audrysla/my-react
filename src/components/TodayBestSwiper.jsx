import React, { lazy, Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from "styled-components";
import { Products } from '../constants/Products'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import ItemProduct from './ItemTypeA';
import ItemSkeleton from './ItemSkeleton'
const ItemProduct = lazy(() => import('./ItemTypeA'));

const Wrap = styled.div``;
const H1 = styled.h1`
  text-align:center;
  font-size:25px;
  margin-bottom:15px;
`;
const Image = styled.img``;
// const ProductTitle = styled.div`
//   padding:10px 0;
//   line-height:22px;
//   color:#333;
// `;
// const DimmedPrice = styled.div`
//   color: rgb(181, 181, 181);
//   text-decoration: line-through;
//   margin-top:10px;
// `;
// const Price = styled.div`
//   margin-top:8px;
//   font-weight:bold;
//   color:#333;
//   em{
//     margin-right:5px;
//     font-style:normal;
//     color:rgb(250, 98, 47)
//   }
// `;
const Tag = styled.span`
  display:block;
`

function TodayBestSwiper(){
  const result = Products.filter(list => list.type === 'today_best');

  return (    
    <Wrap>
      <H1>TODAY BEST</H1>
      <Suspense fallback={<ItemSkeleton/>}>
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
          {
            result.map((item, index) => (
              <SwiperSlide>              
                <ItemProduct item={item}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Suspense>
    </Wrap>
  )
}
export default TodayBestSwiper;