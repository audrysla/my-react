import React from 'react';
import styled from "styled-components";
import NavItems from './navItems' 
import { Items } from '../constants/constNav'

const Ul = styled.ul``;

function Nav(){
  return ( 
    <nav>        
        <div className='btn-category'>카테고리</div>
        <Ul>
          {
            Items.map((item, index) =>
              <NavItems 
                item={item}
                index={index} 
              />
            )
          }      
        </Ul>
    </nav>
  ) 
}

export default Nav;