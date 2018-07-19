import React, { Component } from "react";
import ReactDOM from 'react-dom';
import LargeImage from './largeImage';

class Item extends Component {
    constructor(props) {
        super(props);

        this.showBigImage = this.showBigImage.bind(this);
    }
    showBigImage() {
        const { entity } = this.props;
        return (
            ReactDOM.render(
                <LargeImage key={entity.id} imgeUrl={entity} />,
                document.getElementById('largeImageContainer')
            )
        )
    }

    render () {
        return (
            <img className="img-thumbnail img-preview" onClick={this.showBigImage} src={this.props.entity.previewURL} />
        );
    }

};

export default Item