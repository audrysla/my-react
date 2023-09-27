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

function Routing(){
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
    </Warp>
  )
}

export default Routing; 