import React, { useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
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
const Elem = styled.div`
  position:fixed;
  z-index:99999;
  top:700px;
  left:-10%;
`;

function Contents(){
  // const Dom = useRef(null);
  // const handleScroll = (e) =>{
  //   // console.log(window.scrollY)
  //   // console.log(Dom.current.offsetLeft)
  //   let domLeft = Dom.current.offsetLeft;
  //   Dom.current.style.setProperty('left', `${window.scrollY}px`);
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { capture: true }); // 스크롤 이벤트 등록
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll); 		// 스크롤 이벤트 제거
  //   };
  // }, []);

  return (
    <Warp> 
      <Header/>
      <div id="contents">
        dd
        {/* <MainBn/> */}
        <div className='inner'>
          <Container className='container'>
            <SwiperComponent/>
            <PC><Tab/></PC>
          </Container>
          <MainProduct>
            <PC><H1>추천 상품</H1></PC>
            <div className="banner bn1">추석 선물</div>
          </MainProduct> 
          
          <ProductList />
          <div className="banner bn2">추석 선물</div>
          {/* <Elem className='dom' ref={Dom}>아이콘</Elem> */}
        </div>
      </div>
    </Warp> 
  )
}

export default Contents;