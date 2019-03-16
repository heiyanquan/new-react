import React, { useState, useEffect } from 'react';
import './style.sass'
import { apiPost } from 'common/js/api'

function GetRankList (props) {
  const [rankList, setRankList] = useState([])

  const initData = () => {
    apiPost('music/rankList').then(res => {
      console.log(res)
      setRankList(res)
    })
  }

  useEffect(() => {
    initData()
  }, [])
  return (
    <div>
      <ul>
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