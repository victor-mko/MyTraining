import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import reducer from './reducers'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));