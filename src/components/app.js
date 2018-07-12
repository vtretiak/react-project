import React, { Component } from 'react';
import Form from '../containers/search/form';
import List  from '../containers/search/list';
import Pagination  from './search/pagination';

const App = () => (
  <div className="container app-container">
    <Form />
    <List />
    <Pagination /> 
  </div>
);

export default App;