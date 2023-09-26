import React from 'react';
import styled from "styled-components";
import '../build-css/common.css';
import '../build-css/contents.css';
import { Products } from '../constants/Products'
import { useParams } from 'react-router-dom';

export default () => {
  const { num } = useParams();
  const result = Products.filter(list => list.id == num);
  const Wrap = styled.div``
  return ( 
    <>
      {/* <h1>상품 상세 페이지</h1> */}
      {
        result.map((item) => (
          <>            
            <Wrap className='product_top'>
              <div className='thumb'>
                <img src={item.img}/>                            
              </div>
              <div>
                <ul>                
                  <li className='type'>
                    <em>{item.type}</em>
                    <em>상품번호 : {item.id}</em>
                  </li>
                  <li className='title'>{item.title}</li>               
                  <li className='dimmedPrice'>
                    <em>{item.discount}</em>
                    <i>{item.dimmedPrice}</i>
                  </li>               
                  <li className='price'>{item.price}</li>
                </ul>
                <table>
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
                </table>
              </div>
            </Wrap>
          </>
        )) 
      }
    </>
  )
}