import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Li = styled.li``;

function Nav({item, index}){
  return (    
    <Li>
        <Link to={`/sub/${index}`}>{item.title}</Link>
    </Li>
  ) 
}

export default Nav;