
import React, { useState, useEffect } from 'react';
import GetSwiperList from './swiperList'

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