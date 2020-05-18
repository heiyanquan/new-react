import React, { useState, useEffect } from 'react';
import { getDiscList } from 'api/recommend'
import './style.sass'

function GetDiscList () {
  const [discList, setDiscList] = useState([]);
  useEffect(() => {
    getDiscList().then(res => {
      if (res.code === 0) {
        setDiscList(res.data.list)
      }
    })
  }, [])
  return (
    <div className="recommend-list">
      <h1 className="list-title">热门歌单推荐</h1>
      <ul>
        {discList.map(item => (
          <li key={item.dissid} className="item">
            <div className="icon">
              <img src={item.imgurl} alt="" />
            </div>
            <div className="text">
              <h2 className="name">{item.creator.name}</h2>
              <p className="desc">{item.dissname}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetDiscList;