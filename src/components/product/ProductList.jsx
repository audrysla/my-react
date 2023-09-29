import React, { lazy, Suspense } from 'react';
import styled from "styled-components";
import { Products } from '../../constants/Products'
import ItemSkeleton from './ItemSkeleton'
import '../../build-css/common.css';
import '../../build-css/contents.css';

const PoductItem = lazy(() => import('./Item'));
const Wrap = styled.div`padding-top:30px;`
const Li = styled.li``;
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
              <PoductItem item={item}/>
            </Suspense>
          </Li>
        ))}
      </ul>
    </Wrap>
  )
}

export default Contents;