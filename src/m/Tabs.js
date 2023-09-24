import React, {useState, useEffect, useRef} from 'react';
import styled from "styled-components";
import '../App.css';

import Items from '../components/tab/items'
import { Btns } from '../constants/btns' 
 
// const Items = lazy(() => import('../components/tab/items'));
// const { Btns } = lazy(() => import('../constants/btns'));

const Container = styled.div``
const Ul = styled.ul``
const Thumb = styled.img``

function Tabs(){
  const [thumbImg, setThumbImg] = useState(Btns[0].imgUrl)  //eslint-disable-line no-unused-vars
  const tabIndex = useRef(Math.floor(Math.random() * Btns.length))
  const timeLoop = useRef()
  const ulRef = useRef();
  const EvTab = (index) => {
    clearInterval(timeLoop.current);
    changes(index);
  }
  
  const changes = (index) =>  {
    tabIndex.current = index
    setThumbImg(Btns[index].imgUrl)
  }
   
  useEffect(() => {
    const items = ulRef.current.childNodes.length-1;
    changes(tabIndex.current);  
    console.log("start",tabIndex.current, items)
    timeLoop.current = setInterval(() => {
      
      tabIndex.current++
           
      if(tabIndex.current > items) tabIndex.current = 0;
     
      changes(tabIndex.current);
      console.log("interval", tabIndex.current, items)

    }, 3000);

    return () => {
      clearInterval(timeLoop.current);
    };
    
  }, []);

  return ( 
    <Container className='tabArea'>
        <Ul ref={ulRef}>
          {Btns.map(({
            title
          }, index) => 
            <Items
              key={index}
              title={title}
              index={index}
              tabActive={tabIndex.current}
              ev={EvTab}
            />
          )}
        </Ul>
        <h2>{Btns[tabIndex.current].title}</h2>
        <Thumb className='thumb' src={thumbImg} alt = "face"/>      
    </Container>
  )
}

export default Tabs;