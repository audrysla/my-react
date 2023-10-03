import React from 'react';
import {useMediaQuery} from 'react-responsive';
import styled from "styled-components";
import Tab from '../components/tab/Tab';
import SwiperComponent from '../components/TodayBestSwiper';
import ProductList from '../components/product/ProductList';
// import MainBn from '../components/MainSwiper';
import Header from './header';
import '../build-css/common.css';
import '../build-css/contents.css';

// [S] 반응형
export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });  
  return <>{isPc && children}</>
}
// [E] 반응형

const Container = styled.div``
const MainProduct = styled.div`
  padding:30px 0;`
// const ProductList = styled.div``
const H1 = styled.h1`
  text-align:center;
  font-size:25px;
  margin-bottom:15px;
`;
const Warp = styled.div``;
function Contents(){
  return (
    <Warp> 
      <Header/>
      <div id="contents">
        {/* <MainBn/> */}
        <div className='inner'>
        
            <Container className='container'>
              <SwiperComponent/>
              <PC><Tab/></PC>
            </Container>
            <MainProduct>
              <PC><H1>추천 상품 404</H1></PC>
              <div className="banner bn1">추석 선물</div>
            </MainProduct> 
          
          <ProductList />
          <div className="banner bn2">추석 선물</div>
        </div>
      </div>
    </Warp> 
  )
}

export default Contents;