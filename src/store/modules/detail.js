import { apiPost } from 'common/js/api'

export const INITIAL_STATE = {
  swiperList: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_SWIPER_LIST': {
      return { swiperList: action.data };
    }
    default:
      return state;
  }
}

export function getSwiperList(dispatch) {
  apiPost('music/swiperList').then(res => {
    dispatch({type: 'GET_SWIPER_LIST', data: res})
  })
}