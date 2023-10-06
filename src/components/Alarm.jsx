import React from 'react';
import styled from "styled-components";

const AlarmWrap = styled.div`
  z-index:100;  
  position:absolute;
  top:35px;
  padding:40px 30px;
  background:#f5f6f8;
  height:300px;
  overflow:hidden;
  overflow-y:auto;
  border-radius:15px;
  box-shadow:1px 5px 5px rgba(0,0,0,.2);
`;

function Util(){
  return (
    <AlarmWrap className='alarm-wrap' >
      <ul>        
        <li>
          <div>
            <em>배송 출발 · 1시간 전</em>            
            <p>[PNB 풍년제과] 초코파이 붓세 반반 세트 | 전주 수제 초코파이자세히 보기</p>
            <button>문의하기</button>
          </div>
        </li>
        <li>
          <div>
            <em>배송 출발 · 1시간 전</em>            
            <p>[PNB 풍년제과] 초코파이 붓세 반반 세트 | 전주 수제 초코파이자세히 보기</p>
            <button>문의하기</button>
          </div>
        </li>
        <li>
          <div>
            <em>배송 출발 · 1시간 전</em>            
            <p>[PNB 풍년제과] 초코파이 붓세 반반 세트 | 전주 수제 초코파이자세히 보기</p>
            <button>문의하기</button>
          </div>
        </li>
        <li>
          <div>
            <em>배송 출발 · 1시간 전</em>            
            <p>[PNB 풍년제과] 초코파이 붓세 반반 세트 | 전주 수제 초코파이자세히 보기</p>
            <button>문의하기</button>
          </div>
        </li>
        <li>
          <div>
            <em>배송 출발 · 1시간 전</em>            
            <p>[PNB 풍년제과] 초코파이 붓세 반반 세트 | 전주 수제 초코파이자세히 보기</p>
            <button>문의하기</button>
          </div>
        </li>
      </ul>
    </AlarmWrap>
  ) 
}

export default Util;