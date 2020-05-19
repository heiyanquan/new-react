import React, { useState, useEffect } from 'react';
import './style.styl'
import { getTopList } from 'api/rank'
import { ERR_OK } from 'api/config'

function GetRankList (props) {
  const [rankList, setRankList] = useState([])

  const initData = () => {
    getTopList().then((res) => {
      console.log(res)
      if (res.code === ERR_OK) {
        setRankList(res.data.topList)
      }
    })
  }

  useEffect(() => {
    initData()
  }, [])
  return (
    <div>
      <ul className="rank_wrapper">
        {rankList.map(item => (
          <li className="item" key={item.id}>
            <div className="icon">
              <img width="100" height="100" src={item.picUrl} alt="" />
            </div>
            <ul className="songlist">
              {item.songList.map((song, index) => (
                <li className="song" key={index}>
                  <span>{index + 1}</span>
                  <span>{song.songname}-{song.singername}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetRankList;