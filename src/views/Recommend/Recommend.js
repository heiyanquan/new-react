
import React, {} from 'react';
import GetSwiperList from './swiperList'
import GetDiscList from './discList'
import './style.sass'
import { List } from 'antd-mobile';

function RecommendPage (props) {
  return (
    <div className="recommend_wrapper">
      <List className="recommend_container">
        <GetSwiperList />
        <GetDiscList />
      </List>
    </div>
  );
}

export default RecommendPage;