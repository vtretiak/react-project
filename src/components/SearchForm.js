import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchImages } from '../actions/SearchAction';

const SearchForm = ({ dispatch }) => {

  let input
  
  return (
    <div className='search-container'>
        <form>
            <h4>Search images!</h4>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Search: </span>
                    <input type="text" placeholder="ex. cat" ref={node => input = node} ></input>
                    <input type="button" onClick={e => {
                        e.preventDefault();
                        dispatch(searchImages(input.value))
                      }} value="GO"/>
                </div>
            </div>
        </form>
      </div>
    )
}

export default connect()(SearchForm)
