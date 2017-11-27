import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducersRoot from './reducers/reducerRoot'
const store = createStore(reducersRoot, {})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
