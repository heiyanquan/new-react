import { apiPost } from 'common/js/api'

export const initialState = {
  singerList: []
};

export function reducer(state, action) {
  switch (action.type) {
    case 'GET_SINGER_LIST':
      return { singerList: action.data };
    default:
      return { singerList: [] }
  }
}

export function GetLetter (dispatch) {
  apiPost('music/singerList').then(res => {
    dispatch({type: 'GET_SINGER_LIST', data: res})
  })
}
