import React, {useState, useEffect, useRef, lazy, Suspense} from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components";
import '../../build-css/tab.css';
import { Link } from "react-router-dom";
import { Products } from '../../constants/Products'
// import Items from './items'
const Items = lazy(() => import('./items'));

const H1 = styled.h1`
  text-align:center;
  font-size:25px;
  margin-bottom:15px;
  text-transform: uppercase;
`;

const Container = styled.div``
const Ul = styled.ul``
const Thumb = styled.img``

function Tabs(){
  const result = Products.filter(list => list.type === 'category_best');
  const [thumbImg, setThumbImg] = useState(result[0].img)
  const tabIndex = useRef(Math.floor(Math.random() * result.length))
  const timeLoop = useRef()

  // 버튼 클릭 시
  const TabClick = (index) => {
    changes(index);
    clearInterval(timeLoop.current);  // 인터벌 제거
  } 
  
  // 탭 변경
  const changes = (index) => {
    tabIndex.current = index         // 버튼 on 지정
    setThumbImg(result[index].img)
  }
  
  useEffect(() => {
    // const lis = document.querySelectorAll('.tabArea ul li');
    console.log(result.length)
    changes(tabIndex.current);
    
    // 탭 자동
    timeLoop.current = setInterval(() => {
      tabIndex.current++      
      if(tabIndex.current > result.length-1) tabIndex.current = 0;
      changes(tabIndex.current);
    }, 3000);

    return () => {
      clearInterval(timeLoop.current);
    };
  }, []); // useEffect 의존성 배열 없음 처음 한 번만 렌더링

  return ( 
    <Container className='tabArea'>
      <H1>category BEST</H1>
      <Link to={`/productDetail/${result[tabIndex.current].id}`}>
        <Thumb className='thumb' src={result[tabIndex.current].img} alt="face"/>
        {/* <h3>{result[tabIndex.current].title}</h3> */}
      </Link>      
      <Suspense fallback={<Skeleton height={100} />}>
        <Ul>
          {result.map((item, index) => 
              <Items
                item={item}
                index={index}
                tabActive={tabIndex.current}
                clickEv={TabClick}
              />
              )}
        </Ul>
      </Suspense>
    </Container>
  )
}

export default Tabs;