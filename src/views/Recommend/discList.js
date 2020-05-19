import React, { useState, useEffect } from 'react';
import { getDiscList } from 'api/recommend'
import './style.styl'
import { useHistory } from "react-router-dom";

function GetDiscList (props) {
  let history = useHistory();
  const [discList, setDiscList] = useState([]);

  useEffect(() => {
    getDiscList().then(res => {
      if (res.code === 0) {
        setDiscList(res.data.list)
      }
    })
  }, [])
  const selectItem = item => {
    props.callsetDisc(item)
    history.push(`/recommend/${item.dissid}`)
  }

  return (
    <div className="recommend-list">
      <h1 className="list-title">热门歌单推荐</h1>
      <ul>
        {discList.map(item => (
          <li key={item.dissid} className="item" onClick={() => selectItem(item)}>
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