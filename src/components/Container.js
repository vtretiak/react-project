import React, { Component } from 'react';
import SearchForm  from './SearchForm';
import ImageList  from './ImageList';
import Pagination  from './pagination';

const Container = () => (
  <div className='container app-container'>
    <SearchForm /> 
    <ImageList /> 
    <Pagination /> 
  </div>
)
export default Container;