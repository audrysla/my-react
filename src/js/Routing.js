import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Main from '../js/main';
import Header from './header';
import SubPage from '../sub/subPage';
import ProductDetail from '../components/product/productDetail';
import Footer from './Footer';
import ScrollTop from './ScrollTop';

const Warp = styled.div`
  min-height:500px;
`;

const SubLayout = styled.div``;

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
        <ScrollTop />
        <Header/>          
        <SubLayout className='subLayout'>
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