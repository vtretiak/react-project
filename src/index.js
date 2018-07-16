import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './store';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider> 
  , document.getElementById('mainContainer')
);