import React from 'react';
import styled from "styled-components";
import '../../build-css/common.css';
import '../../build-css/contents.css';
import { Products } from '../../constants/Products'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function ProductDetail(){
  const { num } = useParams();
  const result = Products.filter(list => list.id === Number(num));
  const Wrap = styled.div``
  const Div = styled.div``
  const Images = styled.img``
  // console.log(result)
  return ( 
    <>
      <Wrap className='product_top'>
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
    </>
  )
}
export default ProductDetail;