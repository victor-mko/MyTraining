import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function counter(state = 0, action) {
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(counter);

store.subscribe(() => {
    console.log('subscribe', store.getState());
})

store.dispatch({ type: 'INCREMENT', state: "+1" });

console.log(store.getState());

ReactDOM.render( < App / > , document.getElementById('root'));