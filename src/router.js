import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Recommend from './views/Recommend/Recommend';
import Singer from './views/Singer/Singer';
import Rank from './views/Rank/Rank';
import User from './views/User/User';
import Detail from './views/Detail/Detail';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/recommend" />} />
    <Route path="/recommend" 
      render={() => (
        <Switch>
          <Route exact path="/recommend" component={Recommend} />
          <Route path="/recommend/:id" component={Detail} />
        </Switch>
      )} 
    />
    <Route exact path="/blank" render={() => <h1>欢迎使用</h1>} />
    <Route path="/singer" component={Singer} />
    <Route path="/rank" component={Rank} />
    <Route path="/user" component={User} />
  </Switch>
);
export default Routes;
