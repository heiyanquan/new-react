import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import Routers from './router';
import { Tabs } from 'antd-mobile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { title: '推荐', path: '#/' },
        { title: '歌手', path: '#/singer' },
        { title: '排行榜', path: '#/rank' },
        { title: '个人', path: '#/user' }
      ],
      page: 0
    }
  }

  componentDidMount () {
    const hash = window.location.hash
    const index = this.state.tabs.findIndex(item => item.path === hash)
    this.setState({
      page: index
    });
  }

  onTabClick (tab, index) {
    window.location.hash = tab.path
    this.setState({
      page: index
    });
  }

  render() {
    return (
      <div className="App">
        <Tabs
          tabs={this.state.tabs}
          page={this.state.page}
          tabBarUnderlineStyle={{ border: '1PX solid #ffcd32' }}
          tabBarBackgroundColor="#222"
          tabBarActiveTextColor="#ffcd32"
          tabBarInactiveTextColor="hsla(0,0%,100%,.5)"
          onTabClick={(tab, index) => this.onTabClick(tab, index)}
        >
        </Tabs>
        <Routers />

      </div>
    );
  }
}

export default App;
