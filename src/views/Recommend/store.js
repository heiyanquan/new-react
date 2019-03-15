import React, { useReducer, useEffect } from 'react';
import {
  apiPost
} from '../../common/api'
import { Carousel, WingBlank } from 'antd-mobile';

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
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {state.swiperList.map(item => (
            <a
              key={item.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%' }}
            >
              <img
                src={item.picUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    </div>
  );
}

export default GetSwiperList;