import React, { useState } from 'react';
import styled from "styled-components";
import { Cate } from '../../constants/Cate';
import { Link } from "react-router-dom";

const CateWrap = styled.div`
  position:relative;
`;
const BtnCate = styled.button``;
const Div = styled.div``;
const SubBoard = styled.div`
  background:#ddd
`;

function Util(){
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [currentMenu, setCurrentMenu] = useState();
  return (
    <CateWrap>
      <BtnCate className='btn-category'
        onClick={() =>{
          setVisible(!visible)
        }}
      >카테고리
      </BtnCate>
      {
        visible && 
      <SubBoard className="subBoard"
        onMouseLeave={() => {
          setIsHovering(false)
          setVisible(!visible)
        }}
      >                  
        <Div className='cateList'>
          <ul>
            {Cate.map((item, index) =>
              <li key={item.id}>
                <a href="#"
                  onMouseEnter={() => {
                    setIsHovering(true);
                    setCurrentMenu(index);
                  }}
                >{item.mMenu}</a>
              </li>
            )}
          </ul>
        </Div>      
        {
          isHovering && 
          <Div className='subCate'>
            <ul>
              {Cate[currentMenu].sMenu.map(item =>
                <li><Link to={`/sub/${item}`}>{item}</Link></li>
              )}
            </ul>
          </Div>
        }
      </SubBoard>
      }
    </CateWrap>
  ) 
}

export default Util;