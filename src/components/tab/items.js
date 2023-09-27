import React from 'react';
import styled from "styled-components";

const Li = styled.li``

function Items({item, index, tabActive, clickEv}){  
  return ( 
    <Li>
      <button 
        className={index === tabActive ? 'on' : '' }
        onClick={() => {clickEv(index)}} 
      >        
        <span className='title'>{item.cate}</span>
      </button>
    </Li>
  ) 
}

export default Items;