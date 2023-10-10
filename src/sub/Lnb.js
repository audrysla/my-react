import React, {useEffect} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import '../build-css/common.css';

const Warp = styled.div`
  ul{
    li{
      text-align:left;
      border:1px solid #f8f8f8;
      margin-top:-1px;
      &:hover, &.on{
        z-index:1;
        position:relative;
        font-weight:bold;
        background:#eee;
        border-color:#eee;
        margin-top:-1px;        
      }
      a{
        display:block;    
        padding:10px;
        font-size:16px;
        color:#333;
        position:relative;
        &:after{
          display: block;
          position: absolute;
          top: 50%;
          right: 15px;
          width: 5px;
          height: 9px;
          margin-top: -5px;
          background: url(https://img3.tmon.kr/fe/release/service/static/markup/pc/im/customer/sp-customer.png?v=20231006164247) no-repeat;
          background-position: -258px -74px;
          content: '';
        }
      }
    }
  }
`;
let lis = document.querySelectorAll('.lnb-ul li');
    const lnbOn = (e) =>{
      console.log(e);
      e.classList.add('on')
    }
    lis.forEach(function(elem, index){ 
      // console.log(elem, index)
      elem.addEventListener('click', (e) => {
        lnbOn(elem)
      });
    });
function Lnb({page}){
  
  useEffect(() => {
    
  }, []); // useEffect 의존성 배열 없음 처음 한 번만 렌더링
  
  
  return (
    <Warp>
      <ul className='lnb-ul'>
        <li
          className={page === '주문내역' ? 'on' : '' }
        ><Link to={`/my/주문내역`}>주문내역</Link></li>
        <li
          className={page === '취소환불' ? 'on' : '' }
        ><Link to={`/my/취소환불`}>취소환불</Link></li>
        <li
          className={page === '자주하는 질문' ? 'on' : '' }
        ><Link to={`/my/자주하는 질문`}>자주하는 질문</Link></li>
      </ul>
    </Warp>
  )
}
export default Lnb