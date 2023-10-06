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
  const body = document.querySelector("body");

  // 알람 레이어 열기
  const showAlarm = () => {
    setVisible(!visible);
    body.addEventListener('click', clickBodyEvent);
  }
  
  // 알람 레이어 닫기
  function clickBodyEvent(event) {
    var target = event.target;    
    if(target != event.currentTarget.querySelector("#contents") &&
      target != event.currentTarget.querySelector("#header") &&
      target != event.currentTarget.querySelector(".container"))
      return ;
      
    setVisible(false);
    body.removeEventListener('click', clickBodyEvent);
    // console.log(target);    
  }

  return (
    <Div className='util' >
      <Btn>톡</Btn>
      <Btn onClick={showAlarm}>알림</Btn>
      {visible && <Alarm/>}
    </Div>
  ) 
}

export default Util;