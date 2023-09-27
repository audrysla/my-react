import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Main from '../js/main';
import ProductDetail from '../sub/productDetail';
import SubPage from '../sub/subPage';
import Header from './header';

const Warp = styled.div`
  min-height:500px;
`;

const SubLayout = styled.div`
  max-width:1050px;
  margin:0 auto;
  padding:50px 0;
`;

const GoTop = styled.a``

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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>          
        <SubLayout>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/productDetail/:num' element={<ProductDetail/>} />
            <Route path='/sub/:id' element={<SubPage/>} />
          </Routes>
        </SubLayout>
      </BrowserRouter>
      <GoTop href="javascript:void(0)" className="goTop"/>
    </Warp>
  )
}

export default Routing; 