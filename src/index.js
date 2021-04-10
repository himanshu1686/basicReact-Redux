import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider} from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './Redux/Reducers/RootReducer';
const store = createStore(rootReducer)
ReactDOM.render(
  <Provider store = {store } >
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


