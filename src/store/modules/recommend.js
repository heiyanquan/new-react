import { playMode } from 'common/js/config'
import { loadSearch } from 'common/js/cache'

export const INITIAL_STATE = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: [],
  favoriteList: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_DISC': {
      return { ...state, disc: action.data };
    }
    default:
      return state;
  }
}

export function setDisc(disc = {}) {
  return (dispatch, state) => {
    dispatch({
      type: 'SET_DISC',
      data: disc
    })
  }
}
export function getSwiperList(dispatch) {
  return (dispatch, state) => {
    console.log(dispatch)
    console.log(state)
  }
}


// function findIndex (list, song) {
//   return list.findIndex((item) => {
//     return item.id === song.id
//   })
// }