import React, { useState, useEffect } from 'react';
import { apiPost } from 'common/js/api'
import './style.sass'

function GetDiscList () {
  const [discList, setDiscList] = useState([]);
  useEffect(() => {
    apiPost('music/getDiscList').then(res => {
      setDiscList(res)
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