import React from 'react';
import styled from "styled-components";
import Tab from '../components/tab/Tab';
import SwiperComponent from '../components/swiperComponent';
import '../build-css/common.css';
import '../build-css/contents.css';

const ContentWrap = styled.div`
  width:1050px;
  margin:0 auto; 
`;
const Container = styled.div``

function Contents(){
  return (
    <ContentWrap>
      <div class="banner">손흥민 배경사진</div>
      <Container className='container'>
        <SwiperComponent/>
        <Tab/>      
      </Container>      
    </ContentWrap> 
  )
}

export default Contents;