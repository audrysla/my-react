import React from 'react';
import styled from "styled-components";
import '../build-css/common.css';
import '../build-css/contents.css';
import { Products } from '../constants/Products'
import { useParams } from 'react-router-dom';

export default () => {
  const { num } = useParams();
  const result = Products.filter(list => list.id == num);

  return ( 
    <>
      <h1>상품 상세 페이지</h1>
      {
        result.map((item) => (
          <>
            <h2>{item.type}</h2>
            <table>
              <tr>
                <td><img src={item.img}/></td>
              </tr>
              <tr>
                <td>{item.title}</td>
              </tr>
              <tr>
                <td>{item.dimmedPrice}</td>
              </tr>
              <tr>
                <td><em>{item.discount}</em> {item.price}</td>
              </tr>
            </table>
          </>
        )) 
      }
    </>
  )
}