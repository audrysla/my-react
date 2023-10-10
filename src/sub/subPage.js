import React from 'react';
import styled from "styled-components";
import { Items } from '../constants/constNav'
import { useParams } from 'react-router-dom';
import '../build-css/common.css';
import Header from '../js/header';
function SubPage(item){
  const { id } = useParams();
  // console.log(useParams())
  const Warp = styled.div`
    padding:30px 10px;
    text-align:center;
    font-size:30px;
    min-height:500px;
  `;
  return (
    <>
    <Header/>
    <Warp className='inner'>      
      <h2>{id} 페이지 입니다.</h2>
    </Warp>
    </>
  )
}
export default SubPage