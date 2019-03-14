import {
  Map,
  List
} from 'immutable';
// import {
//   apiPost,
//   deleteObjEmpty
// } from '../../common/util';

const INIT_SEARCH = 'INIT_SEARCH';
const SET_SEARCH = 'SET_SEARCH';

// 账户管理
const GET_PAGE_LIST = 'GET_PAGE_LIST';


const initialState = Map({
  pageIndex: 1,
  total: 0,
  pageSize: 10,
  search: Map(),
  pageList: List(),

});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INIT_SEARCH:
      return state.merge({
        search: Map()
      });
    case SET_SEARCH:
      return state.merge({
        search: state.get('search').merge(action.params)
      });
    case GET_PAGE_LIST:
      return state.merge({
        pageList: action.data,
        total: action.total,
        pageIndex: action.pageIndex
      });
    default:
      return state;
  }
}

//初始化搜索的值
export function initSearch() {
  return {
    type: INIT_SEARCH
  };
}
//设置搜索的值
export function setSearch(params = {}) {
  return {
    type: SET_SEARCH,
    params
  };
}

// 获得页面列表
export function getPageList(params = {}) {
  return async (dispatch, getState) => {
    // const {
    //   seconds
    // } = getState();
    // let msg = seconds.get('search').merge(params).merge({
    //   pageSize: seconds.get('pageSize'),
    //   source: 'medical'
    // }).toJS();
    // deleteObjEmpty(msg);
    // const response = await apiPost('medical/getPage', msg);
    // dispatch({
    //   type: GET_PAGE_LIST,
    //   data: response.list,
    //   total: response.total,
    //   pageIndex: params.pageIndex
    // });
  };
}
// 获得页面详情
export function getPageDetail(params = {}) {
  return async () => {
    // return await apiPost('medical/detail', params);
  };
}