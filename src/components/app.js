import React, { Component } from 'react';
// import css from '../static/css/.css'
import 'bootstrap';
import Form from '../containers/form';
import List  from '../containers/list';
import Pagination  from './pagination';

const App = () => (
  <div className="container app-container">
    <Form />
    <List />
    <Pagination /> 
  </div>
);

export default App;