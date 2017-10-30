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
  BrowserRouter,
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render( 
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' component={App}/>
        <Route path='/about' component={About}/>
      </Switch>
    </Router>
  </Provider>,
   document.getElementById('root'));  