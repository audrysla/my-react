import React from 'react';
import styled from "styled-components";

const Li = styled.li``

function Items({item, index, tabActive, clickEv}){  
  return ( 
    <Li>
      <a href="javascript:;" 
        className={index === tabActive ? 'on' : '' }
        onClick={() => {clickEv(index)}} 
      >        
        <span className='title'>{item.title}</span>
      </a>
    </Li>
  ) 
}

export default Items;