import React from 'react';
import styled from "styled-components";
import NavItems from './navItems' 
import { Items } from '../constants/constNav'

const Ul = styled.ul``;
const Lotte = styled.a`
  width:100px;
  height:26px;
  background:url('//img3.tmon.kr/cdn4/pc/header/i_lotte.svg') no-repeat 0 0;
`;

function Nav(){
  return ( 
    <nav>        
        <div className='btn-category'>카테고리</div>
        <Ul>
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
        <Lotte href="#"/>
    </nav>
  ) 
}

export default Nav;