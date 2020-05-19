
import React, {} from 'react';
import GetSwiperList from './swiperList'
import GetDiscList from './discList'
import './style.styl'

function RecommendPage (props) {
  return (
    <div className="recommend_wrapper">
      <div className="recommend_container">
        <GetSwiperList />
        {GetDiscList(props)}
        {props.children}
      </div>
    </div>
  );
}

export default RecommendPage;