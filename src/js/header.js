import React from 'react';
import styled from "styled-components";
import '../build-css/common.css';
import Util from '../components/util'
import Nav from '../components/nav'
import Search from '../components/Search'

const HeaderGroup = styled.div``;
const SearchGroup = styled.div``;

function Header(){
  return (
    <div id="header">
      <div className='bar'></div>    
      <HeaderGroup className='headerGroup'>      
        <SearchGroup className='searchGroup'>
          <h1><a href="/my-react/">React</a></h1>
          <Search/>
          <Util/>
        </SearchGroup>
        <Nav/> 
      </HeaderGroup>
    </div>
  )
}

export default Header;