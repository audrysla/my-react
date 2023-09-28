import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';
import styled from "styled-components";
import Main from '../js/main';
import Header from './header';
import SubPage from '../sub/subPage';
import ProductDetail from '../sub/productDetail';
import Footer from './Footer';

const Warp = styled.div`
  min-height:500px;
`;

const SubLayout = styled.div`
  max-width:1050px;
  margin:0 auto;
  padding:50px 0;
`;

const GoTop = styled.a``

export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });
  
  return <>{isMobile && children}</>
}

export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });
  
  return <>{isPc && children}</>
}

function Routing(){
  window.addEventListener('scroll', function(e){   
    const gotop = document.querySelector(".goTop"); 
    (window.scrollY > 500) ? gotop.classList.add("show") : gotop.classList.remove("show");
    gotop.addEventListener('click', () =>{
      window.scrollTo({top:0, behavior: "smooth"})
    });
  });
  return (
    <Warp>
      {/* <Mobile> mobile </Mobile>
    	<PC> pc </PC> */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>          
        <SubLayout>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/productDetail/:num' element={<ProductDetail/>} />
            <Route path='/sub/:id' element={<SubPage/>} />
          </Routes>
        </SubLayout>
        <Footer/>
      </BrowserRouter>
      <GoTop href="#none" className="goTop"/>
    </Warp>
  )
}

export default Routing; 