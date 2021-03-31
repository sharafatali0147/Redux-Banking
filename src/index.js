import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/combineReducers';

 const storeC = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeC}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

