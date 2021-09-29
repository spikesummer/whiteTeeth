import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from './components/app/App';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';

// const store = configureStore({
//   reducer: {

//   }
// });
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store = {store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);