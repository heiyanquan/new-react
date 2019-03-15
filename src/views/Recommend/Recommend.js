
import React, { useState, useEffect } from 'react';
import './style.less'
import GetSwiperList from './store'

function RecommendPage (props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
  }, []);
  
  return (
    <div>
      {GetSwiperList()}

    </div>
  );
}

export default RecommendPage;