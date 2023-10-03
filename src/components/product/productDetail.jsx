import React from 'react';
import styled from "styled-components";
import '../../build-css/common.css';
import '../../build-css/contents.css';
import Header from '../../js/header';
import { Products } from '../../constants/Products'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// [S] 반응형
export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });  
  return <>{isMobile && children}</>
}
export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });  
  return <>{isPc && children}</>
}
// [E] 반응형

const Wrap = styled.div``;
const Div = styled.div``;
const Images = styled.img``;
const Bar = styled.div`
  display: flex;
  align-items: center;
`;
const Tit = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  text-align:center;
  flex: 0 0 60%;
  margin: 0 auto;
  padding-right:40px;
  font-weight:bold;
  font-size:18px;
`;
const Btn = styled.button`
  flex: 0 0 60px;
  height: 60px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg1MHY1MEgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTI3IDMyLjA3MUwxOS45MjkgMjUgMjcgMTcuOTI5Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  border: none;
`
const Bn = styled.div`
  text-align:center;
  // font-weight:bold;
  padding:10px;
  // border-bottom:1px solid #ddd;
  font-size:16px;
  background:#01aa4d;
  color:#fff;
`

function ProductDetail(){
  const { num } = useParams();
  const result = Products.filter(list => list.id === Number(num));
  const navigate = useNavigate();

  return ( 
    <>
      <PC><Header/></PC>
      <div className='inner'>
      <Wrap className='product_top'>
        <Mobile>
          <Bn>🎉 첫 구매 회원 모두 100만원 지급!! 🎁</Bn>
          <Bar>
            <Btn onClick={() => navigate(-1)}></Btn>
            <Tit>{result[0].title}</Tit>
          </Bar>
        </Mobile>
        <Div className='thumb'>
          <Images src={result[0].img}/>
        </Div>
        <Div>
          <ul>
            <li className='type'>
              <em>{result[0].cate}</em>
              <em>상품번호 : {result[0].id}</em>
            </li>
            <li className='title'>{result[0].title}</li>
            <li className='dimmedPrice'>
              <em>{result[0].discount}</em>
              <i>{result[0].dimmedPrice}</i>
            </li>
            <li className='price'>{result[0].price}</li>
          </ul>
          <table>
            <thead>
              <tr><td>테이블 정보</td></tr>
            </thead>
            <tbody>
              <tr>
                <th>쿠폰할인</th>
                <td>10% 할인쿠폰 받기</td>
              </tr>
              <tr>
                <th>결제혜택</th>
                <td>
                  현대M포인트 5% 사용 가능<br/>
                  최대 6개월 무이자
                </td>
              </tr>
              <tr>
                <th>배송정보</th>
                <td>
                  해외 직배송<br/>
                  무료배송<br/>
                  10/18(수) 이내 도착 예정배송 정보
                </td>
              </tr>
            </tbody>
          </table>
        </Div>
      </Wrap>
      </div>
    </>
  )
}
export default ProductDetail;