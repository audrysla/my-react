import React from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import '../build-css/common.css';
import Header from '../js/header';
import Lnb from './Lnb';

function SubPage(){
  const { pg } = useParams();
  // console.log(useParams())
  const Warp = styled.div`
    padding:30px 10px;
    text-align:center;
    font-size:30px;
    display:flex;
    gap:10px;
    min-height: 500px;
  `;
  const Left = styled.div`
    flex-basis: 200px
  `
  const Contents = styled.div`
    border-left:1px solid #f8f8f8;
    flex:1 1 auto;
    text-align:left;
    padding-left:25px;
  `
  return (
    <>
    <Header/>
    <Warp className='inner'>      
      <Left>
        <Lnb page={pg}/>
      </Left>
      <Contents>
        <h1>{pg}</h1>
      </Contents>
    </Warp>
    </>
  )
}
export default SubPage