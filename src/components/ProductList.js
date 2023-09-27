import React from 'react';
import styled from "styled-components";
import { Products } from '../constants/Products'
import ItemProduct from './ItemTypeA';
import '../build-css/common.css';
import '../build-css/contents.css';

const Wrap = styled.div``
const Title = styled.h3`
  font-size:20px;
  text-align:center;
  margin-bottom:15px;
`

function Contents(){
  return (
    <Wrap>
      <Title>전체 상품리스트</Title>
      <ul className='listA'>
        {Products.map((item) => (
          <li>
            <ItemProduct item={item}/>
          </li>
        ))}
      </ul>
    </Wrap>
  )
}

export default Contents;