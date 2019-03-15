import React, { useReducer, useEffect } from 'react';
import {
  apiPost
} from '../../common/js/api'
import { Carousel, WingBlank } from 'antd-mobile';
import './swiper.less'

const initialState = {
  swiperList: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'GET_SWIPER_LIST':
      return { swiperList: action.data };
    default:
      return { swiperList: [] }
  }
}

function GetSwiperList () {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  useEffect(() => {
    apiPost('music/swiperList').then(res => {
      dispatch({type: 'GET_SWIPER_LIST', data: res})
    })
  }, [])
  return (
    <div>
      <WingBlank className="swiper-box">
        <Carousel autoplay infinite>
          {state.swiperList.map(item => (
            <a key={item.id} href={item.linkUrl}>
              <img
                src={item.picUrl}
                alt=""
                style={{ width: '100%' }}
                onLoad={() => window.dispatchEvent(new Event('resize')) }
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    </div>
  );
}

export default GetSwiperList;