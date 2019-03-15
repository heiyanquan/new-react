import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css'; 
import Routers from './router';
import { Tabs, WhiteSpace } from 'antd-mobile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { title: 'First Tab', sub: '1' },
        { title: 'Second Tab', sub: '2' },
        { title: 'Third Tab', sub: '3' },
      ]
    }
  }

  render() {
    
    return (
      <div className="App">

        <Routers />
      </div>
    );
  }
}

export default App;
