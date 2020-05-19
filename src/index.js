import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreContext, makeStore } from './store';
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import {
  HashRouter
} from "react-router-dom";

fastclick.attach(document.body)
const store = makeStore();

const render = (Component) => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </StoreContext.Provider>,
    document.getElementById('root')
  );
};
render(App);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
