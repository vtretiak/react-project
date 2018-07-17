import React, { Component } from 'react';
import Form from '../containers/form';
import List  from '../containers/list';
import Pagination  from './pagination';

const App = () => (
  <div className="container app-container">
    <Form />
    <div id="largeImageContainer"></div>
    <List />
    <Pagination />
  </div>
);

export default App;