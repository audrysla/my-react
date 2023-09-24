import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from '@emotion/styled';

import MobileCategoryButton from '../BtnStyle/MobileBtnStyle';
import MobileProductSwiper from '../../../../../category/component/MobileProductSwiper_new';
import fetchCollectionProducts from '../../../../../api/collection/fetchCollectionProducts_v2';

import { BtnGoods02 } from '../constants/constants';

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;
const TabWrapper = styled.div``;
const CategoryArea = styled.div``;

export default function Test () {
  const [swiper, setSwiper] = useState({});
  const [selectedConstants, setSelectedConstants] = useState(BtnGoods02[0]);
  const [selectedCategoryCode, setSelectedCategoryCode] = useState(BtnGoods02[0].collectionCode);
  const [categoryProducts, setCategoryProducts] = useState({});

  // 자동 탭 설정
  const tabInterval = useRef();
  const isTabIntervalRunning = useRef(true);

  function handleClickCategoryButton(code) {
    setSelectedCategoryCode(code);
    if (swiper?.__swiper__) {
      swiper.slideTo(0, 0, false);
    }
    stopTabInterval();
  }

  useEffect(async () => {
    if (!categoryProducts[selectedCategoryCode]) {
      // FIXME: 실제 api가 준비되면 아래 주석 해제
      const products = await fetchCollectionProducts(selectedCategoryCode);

      setCategoryProducts({
        ...categoryProducts,
        [selectedCategoryCode]: products.slice(0, 6),
      });
    }
    setSelectedConstants(
      BtnGoods02.find(v => v.collectionCode === selectedCategoryCode)
    );
  }, [selectedCategoryCode]);

  // 슬라이드 이동 시, 자동 탭 변경 중지
  useEffect(() => {
    // Swiper가 초기화 되지 않았으면 return;
    if (!swiper?.__swiper__) return;

    swiper.on('slideChange', () => {
      stopTabInterval();
    });
  }, [swiper]);

  // 매초마다 다음 탭으로 자동 변경, 유저가 탭을 변경하거나 슬라이드를 조작하면 중지
  useEffect(() => {
    // Swiper가 초기화 되지 않았으면 return;
    if (!swiper?.__swiper__) return;

    if (isTabIntervalRunning.current) {
      tabInterval.current = setInterval(() => {
        setSelectedCategoryCode((prevState) => getNextCategory(prevState));
        swiper.slideTo(0, 0, false);
      }, 5000);
    }
    return () => {
      clearInterval(tabInterval.current);
    }
  }, [isTabIntervalRunning.current, swiper]);

  const getNextCategory = useCallback((prevCategoryCode) => {
    const idx = BtnGoods02.findIndex(v => v.collectionCode === prevCategoryCode);
    return BtnGoods02.length - 1 === idx ? BtnGoods02[0].collectionCode : BtnGoods02[idx + 1].collectionCode;
  });

  const stopTabInterval = () => {
    if (isTabIntervalRunning.current) {
      isTabIntervalRunning.current = false;
      clearInterval(tabInterval.current);
    }
  }

  return (
    <Container>
      <TabWrapper className='ButtonWrap'>
        {BtnGoods02.map(({
          title,
          collectionCode,
        }) => (
          <MobileCategoryButton
            key={collectionCode}
            on={collectionCode === selectedCategoryCode}
            title={title}
            onClick={() => handleClickCategoryButton(collectionCode)}
          />
        ))}
      </TabWrapper>
      <CategoryArea className='GoodsWrap2'>
        {categoryProducts[selectedCategoryCode] &&
          <MobileProductSwiper
            setSwiper={setSwiper}
            products={categoryProducts[selectedCategoryCode]}
          />
        }
      </CategoryArea>
      <div>
        {selectedConstants.linkUrlMobile}
      </div>
    </Container>
  );
}