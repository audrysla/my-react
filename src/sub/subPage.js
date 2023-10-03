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
  `;
  return (
    <>
    <Header/>
    <Warp>      
      <h2>{id} {Items[id].title} 페이지 입니다.</h2>
    </Warp>
    </>
  )
}
export default SubPage