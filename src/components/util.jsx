import React from 'react';
import styled from "styled-components";

const Div = styled.div``;
const Span = styled.span`    
  &:nth-child(2){
    position:relative;
    &::after{
      content:"6";
      color:#fff;
      background:red;
      display:block;
      width:22px;
      height:22px;
      line-height: 20px;
      border-radius:100%;
      text-align:center;
      position: absolute;
      top: -8px;
      right: -8px;
      font-weight:bold;
    }
  }
`;

function Util(){
  return (
    <Div className='util' >
      <Span>톡</Span>
      <Span>알림</Span>
    </Div>
  ) 
}

export default Util;