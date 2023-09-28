import React from 'react';
import styled from "styled-components";
import Tab from '../components/tab/Tab';
import SwiperComponent from '../components/TodayBestSwiper';
import ProductList from '../components/ProductList';

import '../build-css/common.css';
import '../build-css/contents.css';

const Container = styled.div``
const MainProduct = styled.div`
  padding:30px 0;`
// const ProductList = styled.div``
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
      <MainProduct>
        <H1>추천 상품 404</H1>
        <div className="banner bn1">추석 선물</div>
      </MainProduct> 
      <ProductList />
      <div className="banner bn2">추석 선물</div>
    </div>
  )
}

export default Contents;