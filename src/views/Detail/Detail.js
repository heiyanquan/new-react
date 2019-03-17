import React, { useEffect, useCallback } from 'react';
import './style.sass'
import { useMappedState, useDispatch } from 'store/';
import { getSwiperList } from 'store/modules/detail';

function GetUserList () {
  const mapState = useCallback((state) => ({
    swiperList: state.detail.swiperList
  }), []);
  const { swiperList } = useMappedState(mapState);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getSwiperList(dispatch)
  }, [])
  console.log(swiperList)
  return (
    <div>
      detail page
    </div>
  );
}

export default GetUserList;