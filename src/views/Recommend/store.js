import React, { useReducer, useEffect } from 'react';
import {
  apiPost
} from '../../common/api'

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
      {state.swiperList.map(item => 
        <img src={item.picUrl} key={item.id} alt="" />
      )}
    </div>
  );
}

export default GetSwiperList;