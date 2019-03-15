
import React, { useEffect } from 'react';
import GetSwiperList from './swiperList'
import GetDiscList from './discList'

function RecommendPage (props) {
  useEffect(() => {

  }, []);
  
  return (
    <div>
      {GetSwiperList()}
      {GetDiscList()}      
    </div>
  );
}

export default RecommendPage;