import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import Main from '../sub/main';
import ProductDetail from '../sub/productDetail';
import SubPage from '../sub/subPage';
import Header from './header';

const Warp = styled.div`
  min-height:500px;
`;

function Routing(){
  return (
    <Warp>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/my-react' element={<Main/>} />
          <Route path='/productDetail' element={<ProductDetail/>} />
          <Route path='/sub/:id' element={<SubPage/>} />
        </Routes>
      </BrowserRouter>
    </Warp>
  )
}

export default Routing; 