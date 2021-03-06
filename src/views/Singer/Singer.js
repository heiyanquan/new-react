import React, { useReducer, useEffect } from 'react';
import { initialState, reducer, GetLetter} from './letter'
import './style.styl'
import {  } from 'antd-mobile';

function GetSingerList () {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  useEffect(() => {
    GetLetter(dispatch)
  }, [])
  return (
    <div className="singer_wrapper">
      <ul className="singer_container">
        {state.singerList.map(group => (
          <li key={group.title} className="list-group">
            <h2 className="list-group-title">{group.title}</h2>
            <ul>
              {group.items.map(item => (
                <li key={item.id} className="list-group-item">
                  <img className="avatar" src={item.avatar} alt="" />
                  <span className="name">{item.name}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetSingerList;