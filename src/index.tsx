import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';

import todo from "./store/reducers/todo";
import App from "./App";

const reducer = combineReducers({todo});
const store = createStore(reducer);
const app = <Provider store={store}>
    <App />
</Provider>

ReactDOM.render(app, document.getElementById('root') as HTMLElement);
