import React from 'react';
import ReactDOM from 'react-dom';
import 'amfe-flexible'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreContext, makeStore } from './store';
import fastclick from 'fastclick'
fastclick.attach(document.body)
const createHistory = require("history").createBrowserHistory;
const store = makeStore();
const history = createHistory();

const render = (Component) => {
  ReactDOM.render(
    <StoreContext.Provider value={store} history={history}>
      <Component />
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
