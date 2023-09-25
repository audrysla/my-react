import React from 'react';
import styled from "styled-components";

const Li = styled.li``;

function Nav({item, index}){
  return (    
    <Li>
        <a href="#">{item}({index})</a>
    </Li>
  ) 
}

export default Nav;