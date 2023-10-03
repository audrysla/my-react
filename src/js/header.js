import React from 'react';
import {useMediaQuery} from 'react-responsive';
import styled from "styled-components";
import '../build-css/common.css';
import Util from '../components/util'
import Nav from '../components/nav/nav'
import Search from '../components/Search'

// [S] 반응형
export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });  
  return <>{isMobile && children}</>
}
export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });  
  return <>{isPc && children}</>
}
// [E] 반응형
 
const HeaderGroup = styled.div``;
const SearchGroup = styled.div``;

function Header(){
  return (
    <div id="header">    	
      {/* <div className='bar'></div>     */}
      <HeaderGroup className='headerGroup'>      
        <SearchGroup className='searchGroup'>
          <h1><a href="/my-react/">React</a></h1>
          <PC>
            <Search/>            
          </PC>
          <Mobile>🎉🎉🎉</Mobile>
          <Util/>
        </SearchGroup>
        <Nav/> 
      </HeaderGroup>
    </div>
  )
}

export default Header;