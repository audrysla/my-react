import React from 'react';
import styled from "styled-components";

const AlarmWrap = styled.div``;

function Alarm(){
  return (
    <AlarmWrap className='alarm-wrap' >
      <div>
        <h1>오늘 받은 알림</h1>
        <ul>
          <li>
            <div>
              <span><i>배송 출발</i><em>1시간 전</em></span>
              <a href="#">베리어 자바라 침대 태블릿 핸드폰 거치대 베리어 자바라 침대 태블릿 핸드폰 거치대</a>
              <button>+1 알림 더 보기</button>
            </div>
          </li>
          <li>
            <div>
              <span><i>배송 출발</i><em>2시간 전</em></span>
              <a href="#">베리어 자바라 침대 태블릿 핸드폰 거치대 베리어 자바라 침대 태블릿 핸드폰 거치대</a>
              <button>+1 알림 더 보기</button>
            </div>
          </li>
          <li>
            <div>
              <span><i>배송 출발</i><em>오후 7:49분</em></span>
              <a href="#">베리어 자바라 침대 태블릿 핸드폰 거치대 베리어 자바라 침대 태블릿 핸드폰 거치대</a>
              <button>+1 알림 더 보기</button>
            </div>
          </li>
          <li>
            <div>
              <span><i>배송 출발</i><em>오전 10:14분</em></span>
              <a href="#">베리어 자바라 침대 태블릿 핸드폰 거치대 베리어 자바라 침대 태블릿 핸드폰 거치대</a>
              <button>+1 알림 더 보기</button>
            </div>
          </li>
          <li>
            <div>
              <span><i>배송 출발</i><em>1시간 전</em></span>
              <a href="#">베리어 자바라 침대 태블릿 핸드폰 거치대 베리어 자바라 침대 태블릿 핸드폰 거치대</a>
              <button>+1 알림 더 보기</button>
            </div>
          </li>
          <li>
            <div>
              <span><i>배송 출발</i><em>1시간 전</em></span>
              <a href="#">베리어 자바라 침대 태블릿 핸드폰 거치대 베리어 자바라 침대 태블릿 핸드폰 거치대</a>
              <button>+1 알림 더 보기</button>
            </div>
          </li>
        </ul>
      </div>
    </AlarmWrap>
  ) 
}

export default Alarm;