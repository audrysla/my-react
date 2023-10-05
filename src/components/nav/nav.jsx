import React, { useState } from 'react';
import styled from "styled-components";
import NavItems from './navItems' 
import { Items } from '../../constants/constNav'
import {useMediaQuery} from 'react-responsive';
import CategoryList from '../CategoryList/CategoryList';

// [S] 반응형
export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });  
  return <>{isPc && children}</>
}
// [E] 반응형

// const CateWrap = styled.div`
//   position:relative;
// `;

const Ul = styled.ul``;
const Lotte = styled.a`
  width:100px;
  height:26px;
  background:url('//img3.tmon.kr/cdn4/pc/header/i_lotte.svg') no-repeat 0 0;
`;

function Nav(){  
  return ( 
    <nav>
        <PC>
          <CategoryList/>
        </PC>
        <Ul className='menu'>
          {
            Items.map((item, index) =>
              <NavItems 
                key={item.id}
                item={item}
                index={index} 
              />
            )
          }      
        </Ul>
        <PC><Lotte href="#"/></PC>
    </nav>
  ) 
}

export default Nav;