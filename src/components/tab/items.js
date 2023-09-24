import React from 'react';
import styled from "styled-components";

const Li = styled.li``

function Items({title, collectionCode, imgUrl, ev, index, tabActive}){  
  return ( 
    <Li>
      <a href="#none" 
        className={index === tabActive ? 'on' : '' }
        onClick={() => {ev(index)}} 
      >        
        {index}. <span className='title'>{title}</span>
      </a>
    </Li>
  ) 
}

export default Items;