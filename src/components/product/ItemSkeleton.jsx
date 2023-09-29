import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";
import styled from "styled-components";

const Tag = styled.span`
  display:block;
`
function ItemSkeleton({i}){
  return (
    <>      
      <Link className='itemProduct'>
        <Tag className='thumb-tag'>{<Skeleton/>}</Tag>
        <Tag className='title-tag'>{<Skeleton count={2}/>}</Tag>
        <Tag className='dimmedPrice-tag'>{<Skeleton width={100}/>}</Tag>
        <Tag className='price-tag'>{<Skeleton width={110}/>}</Tag>
      </Link>
    </>
  )
}
export default ItemSkeleton;
