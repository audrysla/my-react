import React, {useState, useEffect, useRef} from 'react';
import styled from "styled-components";
import './build-css/tab.css';

import Items from './components/tab/items'
import { Btns } from './constants/btns' 
 
// const Items = lazy(() => import('../components/tab/items'));
// const { Btns } = lazy(() => import('../constants/btns'));

const Container = styled.div``
const Ul = styled.ul``
const Thumb = styled.img``

function Tabs(){
  const [thumbImg, setThumbImg] = useState(Btns[0].imgUrl)
  const tabIndex = useRef(Math.floor(Math.random() * Btns.length))
  const timeLoop = useRef()

  // 버튼 클릭 시
  const TabClick = (index) => {
    changes(index);
    clearInterval(timeLoop.current);  // 인터벌 제거
  } 
  
  // 탭 변경
  const changes = (index) => {
    tabIndex.current = index         // 버튼 on 지정
    setThumbImg(Btns[index].imgUrl)
  }
  
  useEffect(() => {
    const lis = document.querySelectorAll('.tabArea ul li');
    changes(tabIndex.current);
    
    // 탭 자동
    timeLoop.current = setInterval(() => {
      tabIndex.current++
      if(tabIndex.current > lis.length-1) tabIndex.current = 0;
      changes(tabIndex.current);
    }, 3000);

    return () => {
      clearInterval(timeLoop.current);
    };
  }, []); // useEffect 의존성 배열 없음 처음 한 번만 렌더링

  return ( 
    <Container className='tabArea'>
      <h2>React Tab Component</h2>
        <Ul>
          {Btns.map((item, index) => 
            <Items
              item={item}
              index={index}
              tabActive={tabIndex.current}
              clickEv={TabClick}
            />
          )}
        </Ul>
        <Thumb className='thumb' src={thumbImg} alt="face"/>      
        <h3>{Btns[tabIndex.current].title}</h3>
    </Container>
  )
}

export default Tabs;