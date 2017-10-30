import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import About from './About';
import reducer from './reducers'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';


const history = createHistory();
const middleware = routerMiddleware(history)
const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
);

ReactDOM.render( 
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/about' component={About}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
   document.getElementById('root'));  