import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Recommend from './views/Recommend/Recommend';
import Singer from './views/Singer/Singer';
import Rank from './views/Rank/Rank';
import User from './views/User/User';

const Routes = () => (
	<HashRouter>
    <Switch>
      <Route exact path="/" component={Recommend} />
      <Route exact path="/blank" render={() => <h1>欢迎使用</h1>} />
      <Route path="/recommend" component={Recommend} />
      <Route path="/singer" component={Singer} />
      <Route path="/rank" component={Rank} />
      <Route path="/user" component={User} />
    </Switch>
	</HashRouter>
);
export default Routes;
