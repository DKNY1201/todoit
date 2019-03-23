import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import {EnthusiasmAction} from './actions';
import Hello from './containers/Hello';
import {enthusiasm} from './reducers';
import {IStoreState} from './types';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

const app = <Provider store={store}>
    <Hello />
</Provider>

ReactDOM.render(app, document.getElementById('root') as HTMLElement);
