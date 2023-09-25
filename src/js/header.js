import React from 'react';
import styled from "styled-components";
import '../build-css/common.css';
import Util from '../components/util'
import Nav from '../components/nav'
import Search from '../components/Search'

const Wrap = styled.div``;
const HeaderGroup = styled.div``;
const SearchGroup = styled.div``;

function Header(){
  return (
    <Wrap>
      <div className='bar'></div>    
      <HeaderGroup className='headerGroup'>      
        <SearchGroup className='searchGroup'>
          <h1><a href="https://audrysla.github.io/my-react/">React Publishing</a></h1>
          <Search/>
          <Util/>
        </SearchGroup>
        <Nav/>
      </HeaderGroup>
    </Wrap>
  )
}

export default Header;