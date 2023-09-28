import React, { lazy, Suspense } from 'react';
import styled from "styled-components";
import { Products } from '../constants/Products'
import '../build-css/common.css';
import '../build-css/contents.css';
// import ItemProduct from './ItemTypeA';
import ItemSkeleton from './ItemSkeleton'
const ItemProduct = lazy(() => import('./ItemTypeA'));

const Li = styled.li``;
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
          <Li key={item.id}>
            <Suspense fallback={<ItemSkeleton/>}>
              <ItemProduct item={item}/>
            </Suspense>
          </Li>
        ))}
      </ul>
    </Wrap>
  )
}

export default Contents;