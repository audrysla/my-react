import React from 'react';
import styled from "styled-components";
import Tab from '../components/tab/Tab';
import SwiperComponent from '../components/TodayBestSwiper';
import '../build-css/common.css';
import '../build-css/contents.css';

const Container = styled.div``
const ProductList = styled.div`
  padding:30px 0;
`
const H1 = styled.h1`
  text-align:center;
  font-size:25px;
  margin-bottom:15px;
`;

function Contents(){
  return (
    <div id="contents">
      <Container className='container'>
        <SwiperComponent/>
        <Tab/>      
      </Container>
      <ProductList>
        <H1>추천 상품 404</H1>
        <div class="banner bn1">추석 선물</div>
        <div class="banner bn2">추석 선물</div>
      </ProductList>
    </div>
  )
}

export default Contents;