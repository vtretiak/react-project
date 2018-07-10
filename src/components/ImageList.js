import React, { Component } from 'react';

import { connect } from 'react-redux';

const ImageList = ({ images }) => (
  <ul>

    {
    	console.log(images)
    	
		// images.map(imageItem =>
	    //   <imageItem
	    //     key={imageItem.previewURL}
	    //     {...imageItem}
	    //     // onClick={() => toggleTodo(todo.id)}
	    //   />
		// )
	}
  </ul>
)
const generateImageList = images => {
	console.log('generateImageList');
	return console.log(images);
}

const mapStateToProps = state => ({
  images: generateImageList(state.Search)	
})
export default connect(mapStateToProps)(ImageList)