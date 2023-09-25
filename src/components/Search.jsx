import React from 'react';
import styled from "styled-components";

const SearchBox = styled.div``;

function Nav(){  
  return ( 
    <SearchBox className='searchBox'>      
      <input type="text" placeholder='검색어를 입력해주세요.'/>
      <button>검색</button>
    </SearchBox>
  ) 
}

export default Nav;