import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { persistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <persistGate persistor={persistor}>
        <App />
      </persistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
