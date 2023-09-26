import React from 'react';
import { useParams } from 'react-router-dom';
import '../build-css/common.css';
import { Items } from '../constants/constNav'
export default (item) => {
  const { id } = useParams();
  console.log(useParams())
  return (
    <>
      <h2>{id} {Items[id].title} 페이지 입니다.</h2>
    </>
  )
}