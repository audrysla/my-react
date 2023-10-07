import React from 'react';
import styled from "styled-components";

const AlarmWrap = styled.div``;

function Alarm(){
  return (
    <AlarmWrap className='alarm-wrap' >
      <div>
        <h1>오늘 받은 알림<a href="#">설정</a></h1>
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
              <span><i>내 자산</i><em>오후 7:49분</em></span>
              <a href="#">청구서가 도착했습니다.</a>
              <button>+1 알림 더 보기</button>
            </div>
          </li>
          <li>
            <div>
              <span><i>결제 알림</i><em>2시간 전</em></span>
              <a href="#">10월 10일은 현대카드 결제일입니다. 결제계좌 잔액이 충분한지 확인해보세요.</a>
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
              <span><i>배송 출발</i><em>1일 전</em></span>
              <a href="#">베리어 자바라 침대 태블릿 핸드폰 거치대 베리어 자바라 침대 태블릿 핸드폰 거치대</a>
              <button>+1 알림 더 보기</button>
            </div>
          </li>
          <li>
            <div>
              <span><i>배송 출발</i><em>2일 전</em></span>
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