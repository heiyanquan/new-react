import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import Singer from 'common/js/singer'
const HOT_SINGER_LEN = 10
const HOT_NAME = '热门'

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
  return getSingerList().then((res) => {
    if (res.code === ERR_OK) {
      dispatch({type: 'GET_SINGER_LIST', data: _normalizeSinger(res.data.list)})
    }
  })
}

function _normalizeSinger (list) {
  let map = {
    hot: {
      title: HOT_NAME,
      items: []
    }
  }
  list.forEach((item, index) => {
    if (index < HOT_SINGER_LEN) {
      map.hot.items.push(new Singer({
        name: item.Fsinger_name,
        id: item.Fsinger_mid
      }))
    }
    const key = item.Findex
    if (!map[key]) {
      map[key] = {
        title: key,
        items: []
      }
    }
    map[key].items.push(new Singer({
      name: item.Fsinger_name,
      id: item.Fsinger_mid
    }))
  })
  // 为了得到有序列表，我们需要处理 map
  let ret = []
  let hot = []
  for (let key in map) {
    let val = map[key]
    if (val.title.match(/[a-zA-Z]/)) {
      ret.push(val)
    } else if (val.title === HOT_NAME) {
      hot.push(val)
    }
  }
  ret.sort((a, b) => {
    return a.title.charCodeAt(0) - b.title.charCodeAt(0)
  })
  return hot.concat(ret)
}

