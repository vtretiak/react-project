import React, { Component } from "react";
import ReactDOM from 'react-dom';
import LargeImage from './largeImage';

class Item extends Component {
    constructor(props) {
        super(props);

        this.showBigImage = this.showBigImage.bind(this);
    }
    showBigImage() {
        return (
        ReactDOM.render(
            <LargeImage key={this.props.entity.id} imgeUrl={this.props.entity} />,
            document.getElementById('largeImageContainer')
        ))
    }

    render () {
        return (
            <img className="img-thumbnail" onClick={this.showBigImage} src={this.props.entity.previewURL} />
        );
    }

};

export default Item