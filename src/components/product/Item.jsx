import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../build-css/mixin.css'

const Image = styled.img``;
const Tag = styled.span`
  display:block;
`

function PoductItem({item}){
  return (
    <>
      <Link to={`/productDetail/${item.id}`} className='itemProduct'>
        <Tag className='thumb-tag'><LazyLoadImage src={item.img} /></Tag>
        <Tag className='title-tag'>{item.title}</Tag>
        <Tag className='dimmedPrice-tag'>{item.dimmedPrice}</Tag>
        <Tag className='price-tag'><em>{item.discount}</em>{item.price}</Tag>
      </Link>
    </>
  )
}
export default PoductItem;
