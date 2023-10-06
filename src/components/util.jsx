import React, { useState } from 'react';
import styled from "styled-components";
import Alarm from './Alarm';

const Div = styled.div``;
const Btn = styled.button`
font-family: 'Noto Sans KR', sans-serif;
  &:nth-child(2){
    position:relative;
    &::after{
      content:"6";
      color:#fff;
      background:#e93838;
      display:block;
      width:22px;
      height:22px;
      line-height: 20px;
      font-size:15px;
      border-radius:100%;
      text-align:center;
      position: absolute;
      top: -8px;
      right: -8px;
      font-weight:600;
    }
  }
`;

function Util(){  
  const [visible, setVisible] = useState(false);
  return (
    <Div className='util' >
      <Btn>톡</Btn>
      <Btn onClick={() => setVisible(!visible)}>알림</Btn>
      {visible && <Alarm/>}
    </Div>
  ) 
}

export default Util;