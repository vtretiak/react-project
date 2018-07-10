import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Container from './components/Container';
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)


ReactDOM.render (

	<Provider store={store}>
  		<Container />
  	</Provider> 
  , document.getElementById('mainContainer')
);