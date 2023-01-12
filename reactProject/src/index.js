import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import{ createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/_index';

import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <App />
     {/* </React.StrictMode> */}
    </Provider>
);

