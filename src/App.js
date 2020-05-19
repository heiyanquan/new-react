import React, { useState, useEffect } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import Routers from './router';
import { Tabs } from 'antd-mobile';
import {
  useHistory,
  useLocation
} from "react-router-dom";
const tabs = [
  { title: '推荐', path: '/' },
  { title: '歌手', path: '/singer' },
  { title: '排行榜', path: '/rank' },
  { title: '个人', path: '/user' }
]

function App (props) {
  let history = useHistory();
  let location = useLocation();
  const [page, setPage] = useState(0)

  useEffect(() => {
    const pathname = location.pathname
    const index = tabs.findIndex(item => item.path === pathname)
    setPage(index)
  }, [location])

  const onTabClick =  (tab, index) => {
    history.push(tab.path)
    setPage(index)
    
  }

  return (
    <>
      <Tabs
        tabs={tabs}
        page={page}
        tabBarUnderlineStyle={{ border: '1px solid #ffcd32' }}
        tabBarBackgroundColor="#222"
        tabBarActiveTextColor="#ffcd32"
        tabBarInactiveTextColor="hsla(0,0%,100%,.5)"
        onTabClick={(tab, index) => onTabClick(tab, index)}
      >
      </Tabs>
      <Routers />
    </>
  )

}

export default (App);
